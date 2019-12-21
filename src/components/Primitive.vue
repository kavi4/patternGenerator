<template>
    <div class="primitive">
        <div class="upload">
            <input type="file" name="primitive-upload">
        </div>
        <div class="size">
            <base-text-input
                    label="Size"
                    v-model="sizeMin"/>
            <base-text-input
                    label="Size"
                    v-model="sizeMax"/>
        </div>
        <div class="destiny">
            <base-text-input
                    label="Destiny"
                    v-model="destinyMin"/>
            <base-text-input
                    label="Destiny"
                    v-model="destinyMax"/>
        </div>
        <div class="rotation">
            <base-text-input
                    label="Rotation"
                    v-model="rotationMax"/>
            <base-text-input
                    label="Rotation"
                    v-model="rotationMin"/>
        </div>
    </div>
</template>

<script>
    import BaseTextInput from "Components/BaseTextInput";

    function attribute(name) {
        let result = {}

        result[name] = {
            get() {
                return this.primitive[name]
            },
            set(event) {
                this.changeAttribute({id: this.primitive.id, attribute: name, value: event.target.value})
            },
        }

        return result
    }

    export default {
        name: "Primitive",
        components: {BaseTextInput},
        props: {
            primitive: {
                required: true,
            }
        },
        computed: Object.assign(
            attribute('sizeMin'),
            attribute('sizeMax'),
            attribute('destinyMin'),
            attribute('destinyMax'),
            attribute('rotationMax'),
            attribute('rotationMin'),
        ),
        methods: {
            changeAttribute(payload) {
                this.$emit('changeAttribute', payload)
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "~Colors"

    .primitive
        background-color: $color-main
</style>
