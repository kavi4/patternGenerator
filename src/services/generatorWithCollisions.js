export default class GeneratorWithCollisions {

    constructor(options) {
        this.width = options.width
        this.height = options.height
        this.maxAttempts = options.maxAttempts
        this.images = []

    }

    generate(primitives) {
        for (const id in primitives) {

            const primitive = primitives[id]

            let img = new Image();
            img.src = primitive.file

            const instanceCount = Math.floor(this._rand(+primitive.densityMin, +primitive.densityMax))

            for (let i = 0; i < instanceCount; i++) {
                let attempts = 1
                this._generateImage(primitive, img, attempts)
            }
        }
    }

    _generateImage(primitive, img, attempts) {

        if (attempts > this.maxAttempts) {
            return
        }

        const image = this._getImage(primitive, img)

        if (this._hasCollision(image)) {
            attempts++
            return this._generateImage(primitive, img, attempts)
        }

        this.images.push(image)
    }

    _getImage(primitive, img) {

        const size = this._rand(+primitive.sizeMin, +primitive.sizeMax)
        const w = img.naturalWidth * size
        const h = img.naturalHeight * size

        const x = this._rand(0, width)
        const y = this._rand(0, height)

        const rotate = this._toRadians(Math.floor(this._rand(primitive.rotationMin, primitive.rotationMax)))

        return {
            img,
            x,
            y,
            width: w,
            height: h,
            rotate,
        }
    }

    _rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    _toRadians(degrees) {
        return degrees * Math.PI / 180;
    }

    _hasCollision(insertImage) {

        const x1 = insertImage.x
        const x2 = insertImage.x + insertImage.width
        const y1 = insertImage.y
        const y2 = insertImage.y - insertImage.height

        for (let i = 0; i < this.images.length; i++) {
            const image = this.images[i];

            const X1 = image.x
            const X2 = image.x + image.width
            const Y1 = image.y
            const Y2 = image.y - image.height

            if (x1 >= X1 && x1 <= X2 || x2 >= X1 && x2 <= X2) {
                if (y1 <= Y1 && y1 >= Y2 || y2 <= Y1 && y2 >= Y2) {
                    return true
                }
            }
        }
        return false;
    }
}
