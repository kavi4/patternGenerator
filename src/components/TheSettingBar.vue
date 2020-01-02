<template>
    <div id="setting-bar">
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
            <primitive-create-form @create="createPrimitive"/>
        </div>
        <div class="control">
            <button class="btn upload flaticon-arrow"></button>
        </div>
    </div>
</template>

<script>
    import ArtBoardSettings from "Components/TheArtBoardSettings"
    import Primitive from "Components/Primitive"
    import {createNamespacedHelpers} from 'vuex'
    import PrimitiveCreateForm from "Components/PrimitiveCreateForm"

    const primitive = createNamespacedHelpers('primitive')
    const artBoard = createNamespacedHelpers('artBoard')

    export default {
        name: "SettingBar",
        components: {PrimitiveCreateForm, Primitive, ArtBoardSettings},
        computed: Object.assign(
            primitive.mapGetters(['primitives']),
            artBoard.mapGetters(['width', 'height'])
        ),
        methods: Object.assign(
            primitive.mapActions({
                changePrimitiveAttribute: 'changeAttribute',
                deletePrimitive: 'delete',
                createPrimitive: 'create',
            }),
            artBoard.mapActions({changeArtBoardAttribute: 'changeAttribute'})
        )
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
        background-color: transparent
        color: $color-main--dark
        text-align: center
        font-size: 10px
        padding: 5px
        border: 1px solid $color-main--dark

        &:hover
            background-color: $color-secondary
            color: $color-main--light
</style>
