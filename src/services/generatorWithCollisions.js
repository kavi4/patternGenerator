import BaseGenerator from './generator'

export default class GeneratorWithCollisions extends BaseGenerator {

    /**
     * @param options
     */
    constructor(options) {
        super(options)
        this.maxAttempts = options.maxAttempts
    }

    /**
     * Генерирует изображения на основе коллекции примитивов
     * @param primitives Примитивы
     * @returns {Array}
     */
    generate(primitives) {

        let groups = this._initPrimitiveInstanceCount(primitives)

        let i = 0

        while (this._getInstanceCount(groups)) {
            let group = groups[i]
            let attempts = 1

            if (group.instanceCount) {
                this._generateImage(group.primitive, attempts)
                group.instanceCount--
            }

            i++

            if (i >= groups.length) {
                i = 0;
            }
        }
        return this.images
    }

    _getInstanceCount(groups) {
        return groups.reduce((sum, group) => {
            return sum + group.instanceCount
        }, 0);
    }

    _initPrimitiveInstanceCount(primitives) {

        return Object.values(primitives).map((primitive) => {

            const instanceCount = Math.floor(this._rand(+primitive.densityMin, +primitive.densityMax))

            return {
                instanceCount,
                primitive,
            }
        })
    }

    _generateImage(primitive, attempts) {

        if (attempts > this.maxAttempts) {
            return
        }

        const image = this._generateImageByPrimitive(primitive)

        if (this._hasCollision(image)) {
            attempts++
            return this._generateImage(primitive, attempts)
        }

        this.images.push(image)
    }

    _generateImageByPrimitive(primitive) {

        let img = new Image();
        img.src = primitive.file

        const size = this._rand(+primitive.sizeMin, +primitive.sizeMax)
        const width = img.naturalWidth * size
        const height = img.naturalHeight * size

        const x = this._rand(0, this.canvasWidth)
        const y = this._rand(0, this.canvasHeight)

        const rotate = this._radians(Math.floor(this._rand(primitive.rotationMin, primitive.rotationMax)))

        return {
            img,
            x,
            y,
            width,
            height,
            rotate,
        }
    }

    _hasCollision(insertImage) {
        for (let i = 0; i < this.images.length; i++) {
            let hasCollision = true;
            const exist = this._getCompareModel(this.images[i])
            const insert = this._getCompareModel(insertImage)

            if (exist.x1 > insert.x2 && exist.x2 > insert.x2 ||
                exist.x1 < insert.x1 && exist.x2 < insert.x1 ||
                exist.y1 < insert.y1 && exist.y2 < insert.y1 ||
                exist.y1 > insert.y2 && exist.y2 > insert.y2) {
                hasCollision = false
            }

            if (hasCollision) {
                return true;
            }
        }

        return false;
    }

    _getCompareModel(image) {

        const d1 = this._rotateDot(image.x, image.y, image.x - image.width / 2, image.y - image.height / 2, image.rotate)
        const d2 = this._rotateDot(image.x, image.y, image.x + image.width / 2, image.y - image.height / 2, image.rotate)
        const d3 = this._rotateDot(image.x, image.y, image.x - image.width / 2, image.y + image.height / 2, image.rotate)
        const d4 = this._rotateDot(image.x, image.y, image.x + image.width / 2, image.y + image.height / 2, image.rotate)

        return {
            x1: Math.min(d1.x, d1.x, d2.x, d3.x, d4.x),
            y1: Math.min(d1.y, d1.y, d2.y, d3.y, d4.y),
            x2: Math.max(d1.x, d1.x, d2.x, d3.x, d4.x),
            y2: Math.max(d1.y, d1.y, d2.y, d3.y, d4.y),
        }
    }

    /**
     *
     * @param x0 центр вращения
     * @param y0 центр вращения
     * @param x
     * @param y
     * @param angle угол вращения
     * @returns {{x: number, y: number}}
     * @private
     */
    _rotateDot(x0, y0, x, y, angle) {
        return {
            x: x0 + (x - x0) * Math.cos(angle) - (y - y0) * Math.sin(angle),
            y: y0 + (y - y0) * Math.cos(angle) + (x - x0) * Math.sin(angle),
        }
    }
}
