import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import validators from './validators'

const primitive = {
    namespaced: true,
    state: {
        primitives: {}
    },
    mutations,
    actions,
    getters,
    validators,
}

export default primitive
