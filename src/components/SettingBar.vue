<template>
    <div id="setting-bar">
        <art-board-settings></art-board-settings>
        <hr>
    </div>
</template>

<script>
    import ArtBoardSettings from "Components/ArtBoardSettings";
    export default {
        name: "SettingBar",
        components: {ArtBoardSettings}
    }
</script>

<style lang="sass" scoped>
    @import "~Colors"
</style>
