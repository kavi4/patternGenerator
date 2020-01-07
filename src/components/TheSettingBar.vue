<template>
    <div id="setting-bar">
        <div class="control">
            <button class="btn upload flaticon-arrow" @click="uploadResult"></button>
        </div>
        <div class="settings">
            <art-board-settings :width="width" :height="height" @changeAttribute="changeArtBoardAttribute"/>
            <hr>
            <template v-for="primitive in primitives">
                <primitive
                        :primitive="primitive"
                        @changeAttribute="changePrimitiveAttribute"
                        @delete="deletePrimitive"
                        :key="primitive.id">
                </primitive>
                <hr>
            </template>
            <button class="btn create-btn flaticon-more" @click="createPrimitive"></button>
        </div>
    </div>
</template>

<script>
    import ArtBoardSettings from "Components/TheArtBoardSettings"
    import Primitive from "Components/Primitive"
    import {createNamespacedHelpers} from 'vuex'
    import ImageTypes from "Constants/imageTypes"
    import FileSaver from "filesaver.js-npm"
    import Notification from 'Constants/notification'

    const primitive = createNamespacedHelpers('primitive')
    const artBoard = createNamespacedHelpers('artBoard')

    export default {
        name: "SettingBar",
        components: {Primitive, ArtBoardSettings},
        computed: {
            ...primitive.mapState(['primitives']),
            ...artBoard.mapState(['width', 'height'])
        },
        methods: {
            ...primitive.mapActions({
                changePrimitiveAttribute: 'changeAttribute',
                deletePrimitive: 'delete',
                createPrimitive: 'create',
            }),
            ...artBoard.mapActions({changeArtBoardAttribute: 'changeAttribute'}),
            ...{
                uploadResult() {
                    const canvas = document.getElementById('pattern-preview-art-board')
                    canvas.toBlob(function (blob) {
                        FileSaver.saveAs(blob, `pattern.${ImageTypes.PNG}`);
                    });

                    this.$notify({
                        group: Notification.GROUP.MAIN,
                        type: Notification.TYPE.SUCCESS,
                        title: 'Complete',
                        text: 'Downloading was completed'
                    })
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "~Colors"

    .control
        grid-area: control

    .settings
        grid-area: settings

    #setting-bar
        display: grid
        grid-template-areas: "control" "settings"
        grid-template-rows: 40px 1fr
        grid-template-columns: 1fr
        grid-gap: 0
        max-height: 100vh
        overflow: hidden
        overflow-y: scroll
        padding: 5px

    .upload
        background-color: $color-main--light
        color: $color-main--dark
        text-align: center
        font-size: 10px
        padding: 5px

        &:hover
            background-color: $color-secondary
            color: $color-main--light

    .create-btn
        background-color: $color-main--light
        font-size: 10px
        color: $color-main--dark
        height: 40px

        &:hover
            background-color: $color-secondary
            color: $color-main--light
</style>
