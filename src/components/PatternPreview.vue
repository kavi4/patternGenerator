<template>
    <div id="pattern-preview" @resize="resize">
        <canvas id='pattern-preview-art-board' :width="canvasWidth" :height="canvasHeight"></canvas>
    </div>
</template>

<script>
    export default {
        name: "PatternPreview",
        data: () => {
            return {
                lastWindowWidth: 0,
                lastWindowHeight: 0,
                canvasWidth: 0,
                canvasHeight: 0,
            }
        },
        methods: {
            resize: function () {
                let artBoard = document.getElementById('pattern-preview-art-board')
                let diffWidth = window.innerWidth - this.lastWindowWidth;
                let diffHeight = window.innerHeight - this.lastWindowHeight;

                if (diffWidth !== 0) {
                    artBoard.width = artBoard.clientWidth + artBoard.clientWidth * diffWidth / this.lastWindowWidth
                    this.lastWindowWidth = window.innerWidth;
                }

                if (diffHeight !== 0) {
                    artBoard.height = artBoard.clientHeight + artBoard.clientHeight * (diffHeight / this.lastWindowHeight)
                    this.lastWindowHeight = window.innerHeight;
                }
            }
        },
        mounted() {
            this.lastWindowWidth = window.innerWidth
            this.lastWindowHeight = window.innerHeight

            window.addEventListener('resize', this.resize)

            let patternPreview = document.getElementById('pattern-preview')
            this.canvasWidth = patternPreview.clientWidth
            this.canvasHeight = patternPreview.clientHeight
        }
    }
</script>

<style lang="sass" scoped>
    @import "~Colors"
    #pattern-preview-art-board
        background-color: $color-main--dark
</style>
