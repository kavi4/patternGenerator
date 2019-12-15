import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const primitive = {
    namespaced: true,
    state: {
        primitives: {
            '6d05c8f3-934a-4f12-bf43-7c12fd45f127': {
                id: '6d05c8f3-934a-4f12-bf43-7c12fd45f127',
                file: {},
                sizeMin: 1,
                sizeMax: 2,
                rotationMin: 60,
                rotationMax: 120,
                destinyMin: 1,
                destinyMax: 5,
            }
        }
    },
    mutations,
    actions,
    getters
}

export default primitive
