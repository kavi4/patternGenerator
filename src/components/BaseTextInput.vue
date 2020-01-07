<template>
    <div class="text-input">
        <label v-if="label">{{label}}</label>
        <input type="text"
               class="property"
               @input="$emit('input', $event.target.value)"
               @change="$emit('change', $event.target.value)"
               :value="value">
        <span v-if="error" class="error">{{error}}</span>
    </div>
</template>

<script>
    export default {
        name: 'BaseTextInput',
        props: {
            label: {
                type: String,
            },
            value: {
                required: true,
            },
            error: {
                type: String
            }
        },
    }
</script>

<style lang="sass" scoped>
    @import '~Colors'

    .property
        width: 5em
        border: none
        padding: 5px
        background-color: transparent
        color: $color-text-light
        border-bottom: 1px solid $color-main--dark

    .property:focus
        outline: none

    .error
        color: $color-danger
</style>
