export default (validators) => {

    return (values, state) => {
        let result = {}
        let hasExceptions = false

        for (let index in values) {
            let validation = validateState(values[index], validators)

            if (Object.keys(validation).length > 0) {
                result[index] = validation
                hasExceptions = true
            }
        }

        return hasExceptions ? result : undefined
    }

    function validateState(state, validators) {
        let validation = {}

        for (let attribute in validators) {
            validators[attribute].some((validator) => {
                const exception = validator(state[attribute], state)
                if (exception) {
                    validation[attribute] = exception
                    return true
                }
                return false
            })
        }
        return validation
    }
}
