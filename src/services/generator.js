export default class BaseGenerator {

    constructor(options) {
        this.canvasWidth = options.width
        this.canvasHeight = options.height
        this.images = []
    }

    /**
     * Генерирует изображения на основе коллекции примитивов
     * @param primitives Примитивы
     * @returns {Array}
     */
    generate(primitives) {

        Object.values(primitives).map((primitive) => {

            let img = new Image();
            img.src = primitive.file

            const instanceCount = Math.floor(this._rand(+primitive.densityMin, +primitive.densityMax))

            for (let i = 0; i < instanceCount; i++) {

                const size = this._rand(+primitive.sizeMin, +primitive.sizeMax)
                const w = img.naturalWidth * size
                const h = img.naturalHeight * size

                const x = this._rand(0, this.canvasWidth)
                const y = this._rand(0, this.canvasHeight)

                const rotate = this._radians(Math.floor(this._rand(primitive.rotationMin, primitive.rotationMax)))

                this.images.push({
                    img,
                    x,
                    y,
                    width: w,
                    height: h,
                    rotate,
                })
            }
        })

        return this.images
    }


    _rand(min, max) {
        return Math.random() * (max - min) + min;
    }


    _radians(degrees) {
        return degrees * Math.PI / 180;
    }
}
