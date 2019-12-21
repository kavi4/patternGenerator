<template>
    <div id="setting-bar">
        <art-board-settings :width="width" :height="height" @changeAttribute="changeArtBoardAttribute"/>
        <hr>
        <primitive v-for="primitive in primitives"
                   :primitive="primitive"
                   @changeAttribute="changePrimitiveAttribute"
                   :key="primitive.id">
        </primitive>
        <hr>
    </div>
</template>

<script>
    import ArtBoardSettings from "Components/TheArtBoardSettings";
    import Primitive from "Components/Primitive";
    import {createNamespacedHelpers} from 'vuex';

    const primitive = createNamespacedHelpers('primitive');
    const artBoard = createNamespacedHelpers('artBoard');

    export default {
        name: "SettingBar",
        components: {Primitive, ArtBoardSettings},
        computed: Object.assign(
            primitive.mapGetters(['primitives']),
            artBoard.mapGetters(['width', 'height'])
        ),
        methods: Object.assign(
            primitive.mapActions({changePrimitiveAttribute: 'changeAttribute'}),
            artBoard.mapActions({changeArtBoardAttribute: 'changeAttribute'})
        )
    }
</script>

<style lang="sass" scoped>
    @import "~Colors"
</style>
