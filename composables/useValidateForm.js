// composables/useFormValidation.js
export const useValidateForm = () => {
    // ** Text Formatter **
    const filterText = (text) => {
        let formattedText = text.toString().replaceAll('_', ' ');
        return formattedText[0].toUpperCase() + formattedText.slice(1).toLowerCase();
    };

    // ** Email Validator **
    const isValidEmail = (email) => {
        let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.toLowerCase().match(emailPattern) != null;
    };

    /**
     * ** Field Validation Checker **
     * @param {Object} data - The form data object
     * @param {Object} validationRules - The validation rules for each field
     * @param {Object} errors - The errors object to populate
     */
    const validateForm = async (data, validationRules, errors) => {
        Object.entries(data).forEach(([key, value]) => {
            if (validationRules.hasOwnProperty(key)) {
                const rule = validationRules[key];
                // ** Type Validation **
                if (rule.hasOwnProperty('type')) {
                    const type = rule.type;
                    if (type === 'email' && !isValidEmail(value)) {
                        errors[key] = [`${filterText(key)} must be a valid email address`];
                    } else if (type === 'Number' && isNaN(value)) {
                        errors[key] = [`${filterText(key)} should be a number`];
                    }
                }
       
                // ** Required Validation **
                if (rule.required && (value == null || value.toString().trim() == '')) {
                    errors[key] = [rule.message || `${filterText(key)} is required`];
                }

                // ** Minimum Length Validation **
                if (rule.hasOwnProperty('min') && value !== null && value !== undefined) {
                    const minLength = rule.min;
                    if (value.toString().length < minLength) {
                        errors[key] = [`${filterText(key)} must be at least ${minLength} characters long`];
                    }
                }

                // ** Maximum Length Validation **
                if (rule.hasOwnProperty('max') && value !== null && value !== undefined) {
                    const maxLength = rule.max;
                    if (value.toString().length > maxLength) {
                        errors[key] = [`${filterText(key)} must be less than ${maxLength} characters long`];
                    }
                }
                // Password confirmation validation
                if (rule.hasOwnProperty('match') && value !== null && value !== undefined) {
                    let matchField = rule.match;
                    if (data[matchField] && value !== data[matchField]) {
                        errors[key] = [
                            `${filterText(key)} does not match ${filterText(matchField)}`
                        ];
                    }
                }
            }
        });
    };
    // ** Check if errors object is empty **
    const isValid = (errors) => {
        // Check if every field's array of errors is empty
        const hasErrors = Object.values(errors).some(
            (fieldErrors) => Array.isArray(fieldErrors) && fieldErrors.length > 0
        );
        return !hasErrors;
    };

    return {
        validateForm,
        isValid
    };
};
