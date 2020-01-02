<template>
    <div class="art-board-settings">
        <h3 class="title">Canvas</h3>
        <div class="field-width">
            <base-text-input label="Width"
                             :value="width"
                             @input="(value)=>{changeAttribute({name:'width', value: Number.parseInt(value)})}"/>
        </div>
        <div class="field-height">
            <base-text-input label="Height"
                             :value="height"
                             @input="(value)=>{changeAttribute({name:'height', value: Number.parseInt(value)})}"/>
        </div>
    </div>
</template>

<script>
    import BaseTextInput from "Components/BaseTextInput"

    export default {
        name: "ArtBoardSettings",
        props: {
            width: {
                require: true,
                type: Number
            },
            height: {
                require: true,
                type: Number
            }
        },
        components: {BaseTextInput},
        methods: {
            changeAttribute(payload) {
                this.$emit('changeAttribute', payload)
            }
        },
    }
</script>

<style lang="sass" scoped>
    @import "~Colors"

    .title
        margin: 0
        grid-area: title

    .field-width
        grid-area: width

    .field-height
        grid-area: height

    .art-board-settings
        display: grid
        grid-template-areas: "title title" "width height"
        grid-template-rows: 1fr 1fr
        grid-template-columns: 1fr 1fr
        grid-gap: 5px
        padding: 5px
</style>
