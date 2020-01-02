<template>
    <div class="primitive-create-form">
        <div class="file">
            <base-file-input v-model="file"/>
        </div>
        <div class="size">
            <label>Size</label>
            <base-text-input
                    label="Min"
                    v-model="sizeMin"/>
            <base-text-input
                    label="Max"
                    v-model="sizeMax"/>
        </div>
        <div class="density">
            <label>Density</label>
            <base-text-input
                    label="Min"
                    v-model="densityMin"/>
            <base-text-input
                    label="Max"
                    v-model="densityMax"/>
        </div>
        <div class="rotation">
            <label>Rotation</label>
            <base-text-input
                    label="Min"
                    v-model="rotationMin"/>
            <base-text-input
                    label="Max"
                    v-model="rotationMax"/>
        </div>
        <div class="control">
            <button class="btn create-btn flaticon-more" @click="create"></button>
        </div>
    </div>
</template>

<script>
    import BaseTextInput from "Components/BaseTextInput"
    import BaseFileInput from "Components/BaseFileInput"
    import Uuid from 'uuid/v4'
    import FormMixin from "Mixins/form"

    const getDefaults = function () {
        return {
            id: Uuid(),
            file: null,
            sizeMin: 1,
            sizeMax: 1,
            densityMin: 1,
            densityMax: 1,
            rotationMax: 0,
            rotationMin: 0,
        }
    }

    export default {
        name: "PrimitiveCreateForm",
        data: () => {
            return getDefaults()
        },
        methods: {
            create() {
                this.$emit('create', {...this.$data})
                this.reset(getDefaults())
            },
        },
        mixins: [FormMixin],
        components: {BaseFileInput, BaseTextInput},
    }
</script>

<style lang="sass" scoped>
    @import "~Colors"

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

    .primitive-create-form
        display: grid
        grid-template-areas: "file file file" "size density rotation" "control control control"
        grid-template-rows: 1fr 1fr 0.5fr
        grid-template-columns: 1fr 1fr 1fr
        grid-gap: 10px

    .create-btn
        background-color: $color-main--light
        font-size: 10px
        color: $color-main--dark

        &:hover
            background-color: $color-secondary
            color: $color-main--light
</style>
