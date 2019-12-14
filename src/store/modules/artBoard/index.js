import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const artBoard = {
    namespaced: true,
    state: {
        width: 500,
        height: 500,
    },
    mutations,
    actions,
    getters
}

export default artBoard
