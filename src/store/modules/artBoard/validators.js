import Compare from 'Validators/compare'
import Required from 'Validators/required'
import Number from 'Validators/number'

const required = Required();
const positiveNumber = Compare('>', 0)

export default {
    width: [
        required,
        Number.int,
        positiveNumber,
    ],
    height: [
        required,
        Number.int,
        positiveNumber,
    ],
    generator: [
        required,
    ]
}
