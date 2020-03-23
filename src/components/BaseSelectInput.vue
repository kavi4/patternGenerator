<template>
    <div class="select-input">
        <label v-if="label">{{label}}</label>
        <v-select class="base-select"
                  :value="value"
                  :options="options"
                  @input="emitEvents($event)"/>
        <div v-if="error" class="error">{{error}}</div>
    </div>
</template>

<script>
    import VSelect from 'vue-select'
    import 'vue-select/dist/vue-select.css'

    export default {
        name: "BaseSelectInput",
        props: {
            label: {
                type: String
            },
            options: {
                required: true,
            },
            value: {
                required: true,
            },
            error: {
                type: String
            }
        },
        components: {
            VSelect
        },
        methods: {
            emitEvents(value) {

                if (value) {
                    value = value.code
                }

                this.$emit('input', value)
                this.$emit('change', value)
            }
        }
    }
</script>

<style lang="sass">
    @import '~Colors'

    .select-input .error
        color: $color-danger
        margin-top: 5px

    .base-select .vs__selected
        color: $color-text-light

    .base-select .vs__search::placeholder,
    .base-select .vs__dropdown-toggle,
    .base-select .vs__dropdown-menu
        background: $color-main
        border: 1px solid $color-main--dark
        color: $color-text-light
        text-transform: lowercase
        font-variant: small-caps

    .base-select .vs__clear,
    .base-select .vs__open-indicator
        fill: $color-main--dark

    .base-select .vs__dropdown-option
        color: $color-text-light


    .base-select .vs__dropdown-option--highlight
        background: $color-secondary
        color: $color-text-light


    .base-select .vs__dropdown-option--disabled
        color: $color-text

</style>
