import Each from 'Validators/each'
import Required from 'Validators/required'
import Compare from 'Validators/compare'
import Number from 'Validators/number'

const required = Required()
const positiveNumber = Compare('>=', 0)
const deg = Compare('<', 360)

export default {
    primitives: [
        Each({
            file: [required],
            sizeMin: [required, Number.int, positiveNumber],
            sizeMax: [required, Number.int, positiveNumber],
            densityMin: [required, Number.int, positiveNumber],
            densityMax: [required, Number.int, positiveNumber],
            rotationMax: [Number.int, positiveNumber, deg],
            rotationMin: [Number.int, positiveNumber, deg],
        })
    ]
}
