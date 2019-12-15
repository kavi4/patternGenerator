<template>
    <div class="primitive">
        <div class="upload">
            <input type="file" name="primitive-upload">
        </div>
        <div class="size">
            <label>Size</label>
            <input type="text"
                   class="property"
                   name="primitive-size-min"
                   @change="change({id:this.primitive.id,attribute:'sizeMin',value:$event.target.value})"
                   :value="this.primitive.sizeMin">

            <input type="text"
                   class="property"
                   name="primitive-size-max"
                   @change="change({id:this.primitive.id,attribute:'sizeMax',value:$event.target.value})"
                   :value="this.primitive.sizeMax">
        </div>
        <div class="destiny">
            <label>Destiny</label>
            <input type="text"
                   class="property"
                   name="primitive-destiny-min"
                   @change="change({id:this.primitive.id,attribute:'destinyMin',value:$event.target.value})"
                   :value="this.primitive.destinyMin">

            <input type="text"
                   class="property"
                   name="primitive-destiny-max"
                   @change="change({id:this.primitive.id,attribute:'destinyMax',value:$event.target.value})"
                   :value="this.primitive.destinyMax">
        </div>
        <div class="rotation">
            <label>Rotation</label>
            <input type="text"
                   class="property"
                   name="primitive-rotation-min"
                   @change="change({id:this.primitive.id,attribute:'rotationMax',value:$event.target.value})"
                   :value="this.primitive.rotationMax">

            <input type="text"
                   class="property"
                   name="primitive-rotation-max"
                   @change="change({id:this.primitive.id,attribute:'rotationMin',value:$event.target.value})"
                   :value="this.primitive.rotationMin">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Primitive",
        props: {
            primitive: {
                required: true,
            }
        },
        methods: {
            change: (payload) => {
                this.$emit('saveAttribute', payload)
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "~Colors"

    .primitive
        background-color: $color-main

    .property
        width: 5em
        border: none
        padding: 5px
        background-color: transparent
        color: $color-text-light
        border-bottom: 1px solid $color-main--dark

    .property:focus
        outline: none
</style>
