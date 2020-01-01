<template>
    <div id="setting-bar">
        <div class="settings">
            <art-board-settings :width="width" :height="height" @changeAttribute="changeArtBoardAttribute"/>
            <hr>
            <component v-for="primitive in primitives">
                <primitive
                        :primitive="primitive"
                        @changeAttribute="changePrimitiveAttribute"
                        @delete="deletePrimitive"
                        :key="primitive.id">
                </primitive>
                <hr>
            </component>
            <primitive-create-form @create="createPrimitive"/>
        </div>
        <div class="control">
            <button class="btn upload">Upload</button>
        </div>
    </div>
</template>

<script>
    import ArtBoardSettings from "Components/TheArtBoardSettings";
    import Primitive from "Components/Primitive";
    import {createNamespacedHelpers} from 'vuex';
    import PrimitiveCreateForm from "Components/PrimitiveCreateForm";

    const primitive = createNamespacedHelpers('primitive');
    const artBoard = createNamespacedHelpers('artBoard');

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
        grid-template-rows: 50px 1fr
        grid-template-columns: 1fr
        grid-gap: 0
        max-height: 100vh
        overflow: hidden
        overflow-y: scroll
        padding: 5px

    .upload
        background-color: $color-secondary

        &:hover
            background-color: $color-secondary--light
</style>
