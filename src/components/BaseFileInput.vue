<template>
    <div class="file-input">
        <label class="file-input-area" :for="id" :style="background">
            <span class="flaticon-more" v-if="!value"></span>

            <input :id="id"
                   type="file"
                   class="property"
                   @change.default="change">
        </label>
        <span v-if="error" class="error">{{error}}</span>
    </div>
</template>

<script>
    import Uuid from 'uuid/v4'

    export default {
        name: 'BaseFileInput',
        props: {
            value: {
                required: true,
            },
            error: {
                type: String
            }
        },
        computed: {
            id() {
                return Uuid()
            },
            background() {

                if (this.value) {
                    return `background-image:url('${this.value}')`
                }

                return ''
            }
        },
        methods: {
            change(event) {
                const target = event.target

                if (target.files.length > 0) {
                    this.$emit('input', URL.createObjectURL(target.files[0]))
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import '~Colors'

    .file-input
        height: 100%

    .file-input-area
        display: flex
        justify-content: center
        align-items: center
        min-width: 100%
        min-height: 100%
        border: 1px dashed $color-secondary
        background-color: $color-main
        background-repeat: no-repeat
        background-size: contain
        background-position: center

    .property
        display: none

    .property:focus
        outline: none

    .error
        color: $color-danger
</style>
