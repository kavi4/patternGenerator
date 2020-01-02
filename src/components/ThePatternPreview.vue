<template>
    <div id="pattern-preview">
        <div class="preview-background">
            <canvas id='pattern-preview-art-board' :width="width" :height="height"></canvas>
        </div>
    </div>
</template>

<script>
    import {createNamespacedHelpers} from 'vuex'

    const {mapGetters} = createNamespacedHelpers('artBoard')

    export default {
        name: "PatternPreview",
        computed: mapGetters(['width', 'height']),
    }
</script>

<style lang="sass" scoped>
    @import "~Colors"

    #pattern-preview
        background-color: $color-main--light
        overflow: scroll
        min-width: 0

    #pattern-preview-art-board
        background-color: $color-main--dark

    .preview-background
        padding: 50px
        overflow-x: auto
        width: 100%
        height: 100%
</style>
