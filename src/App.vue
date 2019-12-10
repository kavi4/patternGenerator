<template>
    <div id="app">
        <pattern-preview></pattern-preview>
        <setting-bar></setting-bar>
    </div>
</template>

<script>
    import PatternPreview from "Components/PatternPreview";
    import SettingBar from "Components/SettingBar";

    export default {
        name: 'app',
        components: {SettingBar, PatternPreview},
    }
</script>

<style lang="sass">
    @import "~Colors"
    body
        background-color: $color-main

    #app
        display: grid
        grid-template-areas: "patternPreview settingBar"
        grid-template-rows: 1fr
        grid-template-columns: 3fr 1fr
        grid-gap: 10px
        height: 100vh

    #setting-bar
        grid-area: settingBar

    #pattern-review
        grid-area: patternPreview
</style>
