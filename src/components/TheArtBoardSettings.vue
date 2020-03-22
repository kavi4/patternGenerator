<template>
    <div class="art-board-settings">
        <h3 class="title">{{$t('canvas')}}</h3>
        <div class="field-width">
            <base-text-input :label="$t('width')"
                             :value="width"
                             :error="$v.width"
                             @change="changeAttribute('width', $event)"/>
        </div>
        <div class="field-height">
            <base-text-input :label="$t('height')"
                             :value="height"
                             :error="$v.height"
                             @change="changeAttribute('height', $event)"/>
        </div>
    </div>
</template>

<script>
    import BaseTextInput from 'Components/BaseTextInput'

    export default {
        name: 'ArtBoardSettings',
        props: [
            'width', 'height', '$v'
        ],
        components: {
            BaseTextInput
        },
        methods: {
            changeAttribute(attribute, value) {
                this.$emit('changeAttribute', {attribute, value})
            },
        },
    }
</script>

<style lang="sass" scoped>
    @import '~Colors'

    .title
        margin: 0
        grid-area: title

    .field-width
        grid-area: width

    .field-height
        grid-area: height

    .art-board-settings
        display: grid
        grid-template-areas: 'title title' 'width height'
        grid-template-rows: 1fr 1fr
        grid-template-columns: 1fr 1fr
        grid-gap: 5px
        padding: 5px
</style>

<i18n locale="en" lang="json5">
    {
    "canvas": "Canvas",
    "width": "Width",
    "height": "Height",
    }
</i18n>
