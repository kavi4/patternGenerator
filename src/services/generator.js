export default {
    generate(primitives, width, height) {
        let result = []

        for (const id in primitives) {

            const primitive = primitives[id]

            let img = new Image();
            img.src = primitive.file

            const instanceCount = Math.floor(this.getRandValue(+primitive.densityMin, +primitive.densityMax))

            for (let i = 0; i < instanceCount; i++) {

                //TODO set number type into store
                const size = this.getRandValue(+primitive.sizeMin, +primitive.sizeMax)
                const w = img.naturalWidth * size
                const h = img.naturalHeight * size

                const x = this.getRandValue(0, width)
                const y = this.getRandValue(0, height)

                const rotate = this.toRadians(Math.floor(this.getRandValue(primitive.rotationMin, primitive.rotationMax)))

                result.push({
                    img,
                    x,
                    y,
                    width: w,
                    height: h,
                    rotate,
                })
            }
        }

        return result
    },

    getRandValue(min, max) {
        return Math.random() * (max - min) + min;
    },

    toRadians(degrees) {
        return degrees * Math.PI / 180;
    }
}
