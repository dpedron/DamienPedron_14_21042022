import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

/**
 * Form input
 * @param {string} inputName Used for htmlFor, register and id
 * @param {string} labelText
 * @param {(Object|undefined)} error
 * @param {function} register To register input
 * @param {string} type
 * @returns {JSX}
 */

export default function FormInput({
  inputName,
  labelText,
  error,
  register,
  type,
}) {
  return (
    <>
      <Form.Label className="mt-3" htmlFor={inputName}>
        {labelText}
        {error && <span className="text-danger"> required</span>}
      </Form.Label>
      <Form.Control
        {...register(inputName, {
          required: true,
        })}
        type={type}
        id={inputName}
        isInvalid={error}
      />
    </>
  );
}

FormInput.propTypes = {
  inputName: PropTypes.string,
  labelText: PropTypes.string,
  error: PropTypes.object,
  register: PropTypes.func,
  type: PropTypes.string,
};
