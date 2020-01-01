export default {
    methods: {
        reset: function (data) {
            for (const property in data) {
                this[property] = data[property]
            }
        }
    }
}
