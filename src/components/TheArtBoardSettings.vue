<template>
    <div class="art-board-settings">
        <h3 class="title">{{$t('height')}}</h3>
        <div class="field-width">
            <base-text-input :label="$t('width')"
                             :value="width"
                             :error="$v.width"
                             @input="(value)=>{changeAttribute({attribute:'width', value: Number.parseInt(+value)})}"/>
        </div>
        <div class="field-height">
            <base-text-input :label="$t('height')"
                             :value="height"
                             :error="$v.height"
                             @input="(value)=>{changeAttribute({attribute:'height', value: Number.parseInt(+value)})}"/>
        </div>
    </div>
</template>

<script>
    import BaseTextInput from 'Components/BaseTextInput'

    export default {
        name: 'ArtBoardSettings',
        props: {
            width: {
                require: true,
                type: Number
            },
            height: {
                require: true,
                type: Number
            },
            $v: {
                require: true,
                type: Object
            }
        },
        components: {BaseTextInput},
        methods: {
            changeAttribute(payload) {
                this.$emit('changeAttribute', payload)
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
