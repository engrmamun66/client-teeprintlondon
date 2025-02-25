/*jshint esversion: 6 */
Redactor.add('plugin', 'fullscreen', {
    translations: {
        en: {
            "fullscreen": {
                "fullscreen": "Fullscreen"
            }
        }
    },
    defaults: {
        classname: 'rx-fullscreen',
        iconOpen: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3H8C8.55228 3 9 3.44772 9 4C9 4.55228 8.55228 5 8 5H6.41421L10.7071 9.29289C11.0976 9.68342 11.0976 10.3166 10.7071 10.7071C10.3166 11.0976 9.68342 11.0976 9.29289 10.7071L5 6.41421V8C5 8.55228 4.55228 9 4 9C3.44772 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3ZM17.5858 5H16C15.4477 5 15 4.55228 15 4C15 3.44772 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9C19.4477 9 19 8.55228 19 8V6.41421L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L17.5858 5ZM10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071L6.41421 19H8C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21H4C3.44772 21 3 20.5523 3 20V16C3 15.4477 3.44772 15 4 15C4.55228 15 5 15.4477 5 16V17.5858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929ZM13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L19 17.5858V16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19H17.5858L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z"/></svg>',
        iconClose: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L8 6.58579V5C8 4.44772 8.44772 4 9 4C9.55228 4 10 4.44772 10 5V9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9C4 8.44772 4.44772 8 5 8H6.58579L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289ZM21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L17.4142 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10H15C14.4477 10 14 9.55228 14 9V5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5V6.58579L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289ZM4 15C4 14.4477 4.44772 14 5 14H9C9.55228 14 10 14.4477 10 15V19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19V17.4142L3.70711 21.7071C3.31658 22.0976 2.68342 22.0976 2.29289 21.7071C1.90237 21.3166 1.90237 20.6834 2.29289 20.2929L6.58579 16H5C4.44772 16 4 15.5523 4 15ZM15 14H19C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16H17.4142L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L16 17.4142V19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19V15C14 14.4477 14.4477 14 15 14Z"/></svg>'
    },
    start() {
        let button = {
            title: '## fullscreen.fullscreen ##',
            icon: this.opts.get('fullscreen.iconOpen'),
            command: 'fullscreen.open',
            position: {
                'before': 'html'
            }
        };

        this.app.toolbar.add('fullscreen', button);
    },
    open(e, button) {
        let $cont = this.app.container.get('main');

        $cont.addClass(this.opts.get('fullscreen.classname'));
        if (this.app.statusbar.is()) {
            let statusbarHeight = this.app.statusbar.getHeight();
            $cont.css('height', `calc(100% - ${statusbarHeight}px)`);
        }

        this.app.getDoc().on('keydown.rx-fullscreen', this.close.bind(this));
        this.app.setProp('fullscreen', true);
        this.app.scroll.setTarget($cont);
        this._updateUI();

        button.setToggled();
        button.setIcon(this.opts.get('fullscreen.iconClose'));
        button.setCommand('fullscreen.close');

        this.app.toolbar.rebuildSticky();
        this.app.$body.addClass('rx-stop-scrolling');
        this.app.broadcast('fullscreen.open');
    },
    close(e, button) {
        if (e && (e.which !== this.app.keycodes.ESC) && !this.app.dropdown.isOpen() && !this.app.modal.isOpen()) {
            return;
        }

        let $cont = this.app.container.get('main');
        $cont.removeClass(this.opts.get('fullscreen.classname'));
        $cont.css('height', '');

        this.app.getDoc().off('.rx-fullscreen');
        this.app.removeProp('fullscreen');
        this.app.scroll.resetTarget();
        this._updateUI();

        if (e) {
            button = this.app.toolbar.getButton('fullscreen');
        }

        button.unsetToggled();
        button.setIcon(this.opts.get('fullscreen.iconOpen'));
        button.setCommand('fullscreen.open');

        this.app.toolbar.rebuildSticky();
        this.app.$body.removeClass('rx-stop-scrolling');
        this.app.broadcast('fullscreen.close');
    },

    // =private
    _updateUI() {
        this.app.control.updatePosition();
        this.app.control.updateEvents();
        this.app.context.updatePosition();
        this.app.context.updateEvents();
    }
});