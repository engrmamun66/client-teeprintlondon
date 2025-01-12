/*jshint esversion: 6 */
Redactor.add('plugin', 'mention', {
    translations: {
        en: {
            "mention": {
                "mention": "Mention"
            }
        }
    },
    defaults: {
        url: false,
        start: 1,
        trigger: '@'
    },
    subscribe: {
        'editor.keyup': function(event) {
            if (!this.opts.is('mention.url')) return;
            this._handle(event);
        }
    },
    start() {
        this.handleLen = this.opts.get('mention.start');
    },
    stop() {
        this._hide();
    },

    // private
    _handle(event) {
        var e = event.get('e');
        var key = e.which;
        var ctrl = e.ctrlKey || e.metaKey;
        var arrows = [37, 38, 39, 40];
        var ks = this.app.keycodes;

        if (key === ks.ESC) {
            this.app.editor.restore();
            return;
        }
        if (key === ks.DELETE || key === ks.SPACE || key === ks.SHIFT || ctrl || (arrows.indexOf(key) !== -1)) {
            return;
        }

        if (key === ks.BACKSPACE) {
            this.handleLen = this.handleLen - 2;
            if (this.handleLen <= this.opts.get('mention.start')) {
                this._hide();
            }
        }

        this._emit();
    },
    _emit() {
        let selection = this.app.create('selection');
        let trigger = this.opts.get('mention.trigger');
        var re = new RegExp('^' + trigger);
        this.handleStr = selection.getText('before', this.handleLen);
        this.handleStr2 = selection.getText('before', this.handleLen+1);

        // detect
        if (re.test(this.handleStr)) {
            if (this.handleStr2 && this.handleStr2[0] === ' ' || this.handleStr2[0] === '') {
                this.handleStr = this.handleStr.replace(trigger, '');
                this.handleLen++;

                if ((this.handleLen-1) > this.opts.get('mention.start')) {
                    this._load();
                }
            }
        }
    },
    _load() {
        this.ajax.post({
            url: this.opts.get('mention.url'),
            data: 'mention=' + this.handleStr,
            success: this._parse.bind(this)
        });
    },
    _parse(json) {
        if (json === '' || (Array.isArray(json) && json.length === 0)) {
            this.app.panel.close();
            return;
        }
        var data = (typeof json === 'object') ? json : JSON.parse(json);

        this._build(data);
    },
    _build(data) {

        this.data = data;
        this.$panel = this.app.panel.build(this, 'replace');

        // events
        this._stopEvents();
        this._startEvents();

        // data
        for (let [key, val] of Object.entries(data)) {
            let $item = this.dom('<div>').addClass('rx-panel-item');
            $item.html(val.item);
            $item.attr('data-key', key);
            $item.on('click', this.replace.bind(this));

            this.app.panel.getElement().append($item);
        }

        // position
        let scrollTop = this.app.getDoc().scrollTop();
        let selection = this.app.create('selection');
        let pos = selection.getPosition();

        this.app.panel.open({ top: (pos.bottom + scrollTop), left: pos.left });
        this.app.editor.save();
    },
    replace(e, $el) {
        e.preventDefault();
        e.stopPropagation();

        this.app.editor.restore();

        let $item = ($el) ? $el : this.dom(e.target);
        let key = $item.attr('data-key');
        let replacement = this.data[key].replacement;

        let marker = this.app.create('marker');

        marker.insert('start');
        var markerNode = marker.find('start');
        if (markerNode === false) return;

        var $marker = this.dom(markerNode);
        var current = markerNode.previousSibling;

        var currentText = current.textContent;
        var re = new RegExp(this.opts.get('mention.trigger') + this.handleStr + '$');

        currentText = currentText.replace(re, '');
        current.textContent = currentText;

        $marker.before(replacement);
        //marker.restore();

        this._hide();
    },
    _reset() {
        this.handleStr = false;
        this.handleLen = this.opts.get('mention.start');
    },
    _hide(e) {
        var hidable = false;
        var key = (e && e.which);
        var ks = this.app.keycodes;

        if (!e) {
            hidable = true;
        }
        else if (e.type === 'click' || key === ks.ESC || key === ks.SPACE) {
            hidable = true;
        }

        if (hidable) {
            this._hideForce();
        }
    },
    _hideForce() {
        this.app.panel.close();
        this._reset();
        this._stopEvents();
    },
    _startEvents() {
        var name = 'click.rx-plugin-mention keydown.rx-plugin-mention';

        this.app.getDoc().on(name, this._hide.bind(this));
        this.app.editor.getEditor().on(name, this._hide.bind(this));
    },
    _stopEvents() {
        var name = '.rx-plugin-mention';

        this.app.getDoc().off(name);
        this.app.editor.getEditor().off(name);
    }
});