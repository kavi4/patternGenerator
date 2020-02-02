export default {
    int(value, state) {
        return isNaN(Number.parseInt(value)) ? 'Value must be integer' : undefined;
    },
    float(value, state) {
        return isNaN(Number.parseFloat(value)) ? 'Value must be float' : undefined;
    }
}
