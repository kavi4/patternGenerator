<template>
    <div class="file-input">
        <input type="file"
               class="property"
               v-on="listeners"
               :value="value">
        <span v-if="error" class="error">{{error}}</span>
    </div>
</template>

<script>
    export default {
        name: "BaseFileInput",
        props: {
            value: {
                required: true,
            },
            error: {
                type: String
            }
        },
        computed: {
            listeners() {
                return Object.assign(this.$listeners, {})
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "~Colors"

    .file-input
        min-width: 100%
        min-height: 100%
        border: 1px dashed $color-secondary
        background-color: $color-main

    .property
        display: none

    .property:focus
        outline: none

    .error
        color: $color-danger
</style>
