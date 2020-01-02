<template>
    <div id="pattern-preview">
        <div class="preview-background">
            <canvas id='pattern-preview-art-board' :width="width" :height="height" @click="generate"></canvas>
        </div>
    </div>
</template>

<script>
    import {createNamespacedHelpers} from 'vuex'
    import Generator from 'Services/generator'

    const primitive = createNamespacedHelpers('primitive')
    const artBoard = createNamespacedHelpers('artBoard')

    export default {
        name: "PatternPreview",
        computed: Object.assign(
            artBoard.mapGetters(['width', 'height']),
            primitive.mapGetters(['primitives'])
        ),
        methods: {
            generate(event) {
                const canvas = event.target
                const ctx = canvas.getContext('2d');

                ctx.clearRect(0, 0, this.width, this.height);

                const items = Generator.generate(this.primitives, this.width, this.height)

                items.map((item) => {
                    if (item.rotate !== 0) {
                        ctx.translate(item.x, item.y)
                        ctx.rotate(item.rotate)
                    }

                    ctx.drawImage(item.img, 0, 0, item.width, item.height)

                    if (item.rotate !== 0) {
                        ctx.resetTransform()
                    }
                })
            }
        }
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
