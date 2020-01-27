const mutations = {
    changeAttribute(store, payload) {
        store[payload.attribute] = payload.value
    },
}
export default mutations
