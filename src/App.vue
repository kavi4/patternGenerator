<template>
    <div id="app">
        <pattern-preview></pattern-preview>
        <setting-bar></setting-bar>
    </div>
</template>

<script>
    import PatternPreview from "Components/ThePatternPreview";
    import SettingBar from "Components/TheSettingBar";

    export default {
        name: 'app',
        components: {SettingBar, PatternPreview},
    }
</script>

<style lang="sass">
    @import "~Colors"
    body
        background-color: $color-main

    hr
        border-color: $color-text

    ::selection
        background-color: $color-secondary
        color: $color-secondary--light

    #app
        display: grid
        grid-template-areas: "patternPreview settingBar"
        grid-template-rows: 1fr
        grid-template-columns: 3fr 1fr
        grid-gap: 10px
        height: 100vh
        font-family: 'Avenir', Helvetica, Arial, sans-serif
        color: $color-text

    #setting-bar
        grid-area: settingBar

    #pattern-review
        grid-area: patternPreview

    #app > *
        min-width: 0
</style>
