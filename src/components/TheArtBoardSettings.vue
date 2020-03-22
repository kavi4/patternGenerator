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
        <div class="field-generator">
            <base-select-input
                    :label="$t('generator')"
                    :value="generator"
                    :options="getGeneratorOptions()"
                    :error="$v.generator"
                    @change="changeAttribute('generator',$event)"/>
        </div>
    </div>
</template>

<script>
    import BaseTextInput from 'Components/BaseTextInput'
    import BaseSelectInput from "Components/BaseSelectInput"
    import GENERATOR from 'Constants/generator'

    export default {
        name: 'ArtBoardSettings',
        props: [
            'width', 'height', 'generator', '$v'
        ],
        components: {
            BaseSelectInput,
            BaseTextInput
        },
        methods: {
            changeAttribute(attribute, value) {
                this.$emit('changeAttribute', {attribute, value})
            },

            getGeneratorOptions() {
                return Object.values(GENERATOR.TYPE).map((type) => {
                    return {label: type, code: type}
                })
            }
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

    .field-generator
        grid-area: generator

    .art-board-settings
        display: grid
        grid-template-areas: 'title title' 'width height' 'generator generator'
        grid-template-rows: 1fr 1fr auto
        grid-template-columns: 1fr 1fr
        grid-gap: 5px
        padding: 5px
</style>

<i18n locale="en" lang="json5">
    {
    "canvas": "Canvas",
    "width": "Width",
    "height": "Height",
    "generator": "Generator",
    }
</i18n>
