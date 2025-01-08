const validator = {
    // With Field Validation
    filterText:  function (text) {
        let tt = text.toString().replaceAll('_', ' ')
        return tt[0].toUpperCase() + tt.slice(1).toLowerCase()
    },
    isValidEmail: function (email){
        let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.toLowerCase().match(emailPattern) != null
    },
    isEmptyObject: function (object){
        return Object.keys(object).length ? false : true
    },
    checkValidationError: function (data, validationRule, errors){
        Object.entries(data).forEach(([key, value]) =>{
            if (validationRule.hasOwnProperty(key)) {
                const rules = validationRule[key];
                // Type validation
                if (rules.hasOwnProperty('type')) {
                    let type = rules.type;
                    if (isNaN(value)) {
                        errors[key] = [`${this.filterText(key)} should be ${type}`];
                    }
                }

                // Minimum length validation
                if (rules.hasOwnProperty('min')) {
                    let minLength = rules.min;
                    if (value.length < minLength) {
                        errors[key] = [`${this.filterText(key)} minimum length is ${minLength}`];
                    }
                }

                // Maximum length validation
                if (rules.hasOwnProperty('max')) {
                    let maxLength = rules.max;
                    if (value.length > maxLength) {
                        errors[key] = [`${this.filterText(key)} maximum length is ${maxLength}`];
                    }
                }

                // Required field validation
                if (rules.hasOwnProperty('required')) {
                    if (!value.toString().length) {
                        errors[key] = [`${this.filterText(key)} is required`];
                    }
                }

                // Password confirmation validation
                if (rules.hasOwnProperty('match')) {
                    let matchField = rules.match;
                    if (data[matchField] && value !== data[matchField]) {
                        errors[key] = [
                            `${this.filterText(key)} does not match ${this.filterText(matchField)}`
                        ];
                    }
                }
            }
        })
        return errors
    }
  
}
export default validator
