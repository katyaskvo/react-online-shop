import { FormGroup } from './form-input.styles.jsx';

const FormInput = ({ label, inputOptions }) => {
    return (
        <FormGroup>
            <input className='form-input' {...inputOptions} />
            {label && (
                <label className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            )}
        </FormGroup>
    )
}

export default FormInput;