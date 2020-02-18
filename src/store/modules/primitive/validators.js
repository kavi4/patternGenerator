import Each from 'Validators/each'
import Required from 'Validators/required'
import Compare from 'Validators/compare'
import Number from 'Validators/number'

const required = Required()
const positiveNumber = Compare('>=', 0)
const deg = Compare('<=', 360)

export default {
    primitives: [
        Each({
            file: [required],
            sizeMin: [required, Number.int, positiveNumber, Compare('<=', 'sizeMax')],
            sizeMax: [required, Number.int, positiveNumber, Compare('>=', 'sizeMin')],
            densityMin: [required, Number.int, positiveNumber, Compare('<=', 'densityMax')],
            densityMax: [required, Number.int, positiveNumber, Compare('>=', 'densityMin')],
            rotationMin: [Number.int, positiveNumber, Compare('<=', 'rotationMax'), deg],
            rotationMax: [Number.int, positiveNumber, Compare('>=', 'rotationMin'), deg],
        })
    ]
}
