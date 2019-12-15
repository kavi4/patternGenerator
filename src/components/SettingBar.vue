<template>
    <div id="setting-bar">
        <art-board-settings></art-board-settings>
        <hr>
        <primitive v-for="primitive in primitives"
                   :primitive="primitive"
                   @saveAttribute="saveAttribute"
                   :key="primitive.id">
        </primitive>
        <hr>
    </div>
</template>

<script>
    import ArtBoardSettings from "Components/ArtBoardSettings";
    import Primitive from "Components/Primitive";
    import {createNamespacedHelpers} from 'vuex';

    const {mapGetters, mapActions} = createNamespacedHelpers('primitive');

    export default {
        name: "SettingBar",
        components: {Primitive, ArtBoardSettings},
        computed: mapGetters(['primitives']),
        methods: mapActions(['saveAttribute']),
    }
</script>

<style lang="sass" scoped>
    @import "~Colors"
</style>
