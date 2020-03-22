<template>
    <div id="pattern-preview">
        <div class="preview-background">
            <canvas id='pattern-preview-art-board' width="500" height="500" @click="generate"></canvas>
        </div>
    </div>
</template>

<script>
    import {createNamespacedHelpers} from 'vuex'
    import BaseGenerator from 'Services/generator'
    import CollisionGenerator from 'Services/generatorWithCollisions'
    import GENERATOR from 'Constants/generator'

    const primitive = createNamespacedHelpers('primitive')
    const artBoard = createNamespacedHelpers('artBoard')

    export default {
        name: 'PatternPreview',
        computed: {
            ...primitive.mapState({primitives: 'primitives', primitiveValidation: '$v'}),
            ...artBoard.mapState({width: 'width', height: 'height', artBoardValidation: '$v', generator: 'generator'}),
        },
        methods: {
            generate(event) {

                if (Object.keys(this.primitiveValidation).length > 0 || Object.keys(this.artBoardValidation).length > 0) {
                    return
                }

                const map = {}
                map[GENERATOR.TYPE.BASE] = () => {
                    return new BaseGenerator({
                        width: this.width,
                        height: this.height,
                    })
                }
                map[GENERATOR.TYPE.COLLISION] = () => {
                    return new CollisionGenerator({
                        width: this.width,
                        height: this.height,
                        maxAttempts: 5,
                    })
                }

                const canvas = event.target
                canvas.width = this.width
                canvas.height = this.height

                const ctx = canvas.getContext('2d');

                ctx.clearRect(0, 0, this.width, this.height);

                let generator = map[this.generator]()

                const items = generator.generate(this.primitives)

                items.map((item) => {
                    let x = item.x
                    let y = item.y

                    if (item.rotate !== 0) {
                        ctx.translate(item.x, item.y)
                        ctx.rotate(item.rotate)
                        x = -item.width / 2
                        y = -item.height / 2
                    } else {
                        x = item.x - item.width / 2
                        y = item.y - item.height / 2
                    }

                    ctx.drawImage(item.img, x, y, item.width, item.height)

                    if (item.rotate !== 0) {
                        ctx.resetTransform()
                    }
                })
            }
        },
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
