<template>
    <div class="art-board-settings">
        <h3 class="title">Canvas</h3>
        <div class="field-width">
            <label class="label" for="art-board-width">Width</label>
            <input
                    class="property"
                    type="text"
                    id="art-board-width"
                    :value="width"
                    @change="setWidth($event.target.value)">
        </div>
        <div class="field-height">
            <label class="label" for="art-board-height">Height</label>
            <input
                    class="property"
                    type="text"
                    id="art-board-height"
                    :value="height"
                    @change="setHeight($event.target.value)">
        </div>
    </div>
</template>

<script>
    import {createNamespacedHelpers} from 'vuex';

    const {mapGetters, mapActions} = createNamespacedHelpers('artBoard');

    export default {
        name: "ArtBoardSettings",
        computed: mapGetters(['width', 'height']),
        methods: mapActions(['setWidth', 'setHeight']),
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

    .property
        width: 5em
        border: none
        padding: 5px
        background-color: transparent
        color: $color-text-light
        border-bottom: 1px solid $color-main--dark

    .property:focus
        outline: none

    .label
        color: $color-text

</style>
