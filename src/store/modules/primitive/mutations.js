const mutations = {
    saveAttribute(store, payload) {
        store.primitives[payload.id][payload.attribute] = payload.value
    },
}
export default mutations
