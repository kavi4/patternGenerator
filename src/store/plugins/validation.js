export default function (validateMutation = '$validateState', validationResult = '$v') {
    return (rootStore) => {

        upgradeRegisterModule(rootStore)

        const root = rootStore._modules.root

        rootStore.subscribe((mutation) => {
            if (getMutationName(mutation) === validateMutation) {
                return
            }

            const path = getModulePath(mutation.type)
            const module = getModuleByPath(root, path)
            const validators = module._rawModule.validators

            if (validators) {
                module.context.commit(validateMutation, validateState(module.state, validators))
            }
        })
    }

    function upgradeRegisterModule(rootStore) {

        const registerModule = rootStore.registerModule.bind(rootStore)

        rootStore.registerModule = function (path, rawModule, options = {}) {

            if (rawModule.validators) {
                rawModule.state[validationResult] = {}
                rawModule.mutations[validateMutation] = (store, validation) => {
                    store[validationResult] = validation
                }
            }
            return registerModule(path, rawModule, options)
        }
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

    function getMutationName(mutation) {
        return mutation.type.split('/').pop();
    }

    function getModulePath(mutationName) {
        let path = mutationName.split('/')

        if (path.length <= 1) {
            return []
        }

        path.pop()

        return path
    }

    function getModuleByPath(root, path) {
        let result = root

        path.map((module) => {
            if (result._children[module]) {
                result = result._children[module]
            }
        })

        return result
    }
}
