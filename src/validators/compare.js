const map = {
    '>': {
        validator(value, then) {
            return value > then
        },
        message(value, then) {
            return `Value must be more then ${then}`
        }
    },
    '<': {
        validator(value, then) {
            return value < then;
        },
        message(value, then) {
            return `Value must be less then ${then}`
        }
    },
    '=': {
        validator(value, then) {
            return value === then
        },
        message(value, then) {
            return `Value must be equal ${then}`
        }
    },
    '>=': {
        validator(value, then) {
            return value >= then
        },
        message(value, then) {
            return `Value must be more or equal ${then}`
        }
    },
    '<=': {
        validator(value, then) {
            return value <= then
        },
        message(value, then) {
            return `Value must be less or equal ${then}`
        }
    },
    '!=': {
        validator(value, then) {
            return value !== then
        },
        message(value, then) {
            return `Value must be not equal ${then}`
        }
    },
}

export default (operator, then) => {
    return (value, state) => {

        let thenValue = then

        if (typeof then === 'string') {
            thenValue = state[then]
        }

        let valid = map[operator].validator(value, thenValue)

        if (!valid) {
            return map[operator].message(value, thenValue)
        }
    }
}
