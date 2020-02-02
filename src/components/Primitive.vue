<template>
    <div class="primitive">
        <div class="file">
            <base-file-input :value="primitive.file"
                             :error="$v.file"
                             @change="changeAttribute('file',$event)"/>
        </div>
        <div class="size">
            <label>{{$t('size')}}</label>
            <base-text-input
                    :label="$t('min')"
                    :value="primitive.sizeMin"
                    :error="$v.sizeMin"
                    @change="changeAttribute('sizeMin',$event)"/>
            <base-text-input
                    :label="$t('max')"
                    :value="primitive.sizeMax"
                    :error="$v.sizeMax"
                    @change="changeAttribute('sizeMax',$event)"/>
        </div>
        <div class="density">
            <label>{{$t('density')}}</label>
            <base-text-input
                    :label="$t('min')"
                    :value="primitive.densityMin"
                    :error="$v.densityMin"
                    @change="changeAttribute('densityMin',$event)"/>
            <base-text-input
                    :label="$t('max')"
                    :value="primitive.densityMax"
                    :error="$v.densityMax"
                    @change="changeAttribute('densityMax',$event)"/>
        </div>
        <div class="rotation">
            <label>{{$t('rotation')}}</label>
            <base-text-input
                    :label="$t('min')"
                    :value="primitive.rotationMin"
                    :error="$v.rotationMin"
                    @change="changeAttribute('rotationMin',$event)"/>
            <base-text-input
                    :label="$t('max')"
                    :value="primitive.rotationMax"
                    :error="$v.rotationMax"
                    @change="changeAttribute('rotationMax',$event)"/>
        </div>
        <div class="control">
            <button class="btn delete-btn flaticon-line" @click="deletePrimitive"></button>
        </div>
    </div>
</template>

<script>
    import BaseTextInput from 'Components/BaseTextInput'
    import BaseFileInput from 'Components/BaseFileInput'

    export default {
        name: "Primitive",
        components: {BaseFileInput, BaseTextInput},
        props: {
            primitive: {
                required: true,
            },
            $v: {
                default: () => {
                    return {}
                }
            }
        },
        computed: {},
        methods: {
            deletePrimitive() {
                this.$emit('delete', this.primitive.id)
            },
            changeAttribute(attribute, value) {
                this.$emit('changeAttribute', {id: this.primitive.id, attribute, value})
            },
        }
    }
</script>

<style lang="sass" scoped>
    @import '~Colors'

    .file
        grid-area: file

    .size
        grid-area: size

    .density
        grid-area: density

    .rotation
        grid-area: rotation

    .control
        grid-area: control

    .primitive
        background-color: $color-main
        display: grid
        grid-template-areas: 'file file file' 'size density rotation' 'control control control'
        grid-template-rows: 100px 1fr 40px
        grid-template-columns: 1fr 1fr 1fr
        grid-gap: 10px

    .delete-btn
        background-color: $color-main--light
        color: $color-main--dark
        font-size: 10px

        &:hover
            background-color: $color-danger
            color: $color-main--light

</style>

<i18n locale="en" lang="json5">
    {
    "min": "Min",
    "max": "Max",
    "size": "Size",
    "density": "Density",
    "rotation": "Rotation"
    }
</i18n>
