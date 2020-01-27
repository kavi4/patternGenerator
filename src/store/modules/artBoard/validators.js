import Compare from 'Validators/compare'
import Required from 'Validators/required'

const required = Required();
const positiveNumber = Compare('>', 0)

export default {
    width: [
        required,
        positiveNumber,
    ],
    height: [
        required,
        positiveNumber,
    ]
}
