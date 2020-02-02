<template>
    <div id="pattern-preview">
        <div class="preview-background">
            <canvas id='pattern-preview-art-board' width="500" height="500" @click="generate"></canvas>
        </div>
    </div>
</template>

<script>
    import {createNamespacedHelpers} from 'vuex'
    import Generator from 'Services/generator'

    const primitive = createNamespacedHelpers('primitive')
    const artBoard = createNamespacedHelpers('artBoard')

    export default {
        name: 'PatternPreview',
        computed: {
            ...primitive.mapState({primitives: 'primitives', primitiveValidation: '$v'}),
            ...artBoard.mapState({width: 'width', height: 'height', artBoardValidation: '$v'}),
        },
        methods: {
            generate(event) {

                if (Object.keys(this.primitiveValidation).length > 0 || Object.keys(this.artBoardValidation).length > 0) {
                    return
                }

                const canvas = event.target
                canvas.width = this.width
                canvas.height = this.height

                const ctx = canvas.getContext('2d');

                ctx.clearRect(0, 0, this.width, this.height);

                const items = Generator.generate(this.primitives, this.width, this.height)

                items.map((item) => {
                    if (item.rotate !== 0) {
                        ctx.translate(item.x, item.y)
                        ctx.rotate(item.rotate)
                    }

                    ctx.drawImage(item.img, item.x, item.y, item.width, item.height)

                    if (item.rotate !== 0) {
                        ctx.resetTransform()
                    }
                })
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import '~Colors'

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
