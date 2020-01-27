export default () => {
    return (value, state) => {

        let valid = value || value === false || value === 0

        if (Array.isArray(value)) {
            valid = value.length > 0;
        }

        if (typeof value == 'object') {
            valid = Object.keys(value).length > 0
        }

        if (!valid) {
            return `Value required`;
        }
    }
}
