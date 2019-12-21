const mutations = {
    changeAttribute(store, payload) {
        store[payload.name] = payload.value
    },
}
export default mutations
