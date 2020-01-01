import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const primitive = {
    namespaced: true,
    state: {
        primitives: {}
    },
    mutations,
    actions,
    getters
}

export default primitive
