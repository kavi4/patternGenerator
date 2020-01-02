<template>
    <div class="primitive">
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
            <button class="btn delete-btn flaticon-line" @click="deletePrimitive"></button>
        </div>
    </div>
</template>

<script>
    import BaseTextInput from "Components/BaseTextInput"
    import BaseFileInput from "Components/BaseFileInput"

    function attribute(name) {
        let result = {}

        result[name] = {
            get() {
                return this.primitive[name]
            },
            set(value) {
                this.changeAttribute({id: this.primitive.id, attribute: name, value: value})
            },
        }

        return result
    }

    export default {
        name: "Primitive",
        components: {BaseFileInput, BaseTextInput},
        props: {
            primitive: {
                required: true,
            }
        },
        computed: Object.assign(
            attribute('file'),
            attribute('sizeMin'),
            attribute('sizeMax'),
            attribute('densityMin'),
            attribute('densityMax'),
            attribute('rotationMax'),
            attribute('rotationMin'),
        ),
        methods: {
            deletePrimitive() {
                this.$emit('delete', this.primitive.id)
            },
            changeAttribute(payload) {
                this.$emit('changeAttribute', payload)
            }
        }
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

    .primitive
        background-color: $color-main
        display: grid
        grid-template-areas: "file file file" "size density rotation" "control control control"
        grid-template-rows: 1fr 1fr 0.5fr
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
