import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

/**
 * Form select
 * @param {string} inputName Used for htmlFor, register and id
 * @param {string} labelText
 * @param {(Object|undefined)} error
 * @param {function} register To register input
 * @param {Array.<Object>} options
 * @returns {JSX}
 */

export default function FormSelect({
  inputName,
  labelText,
  error,
  register,
  options,
}) {
  return (
    <>
      <Form.Label className="mt-3" htmlFor={inputName}>
        {labelText}
        {error && <span className="text-danger"> required</span>}
      </Form.Label>
      <Form.Select
        {...register(inputName, {
          required: true,
        })}
        defaultValue=""
        id={inputName}
        isInvalid={error}
      >
        <option value="" disabled hidden>
          Choose here
        </option>
        {options.map((option, i) => {
          return (
            <option key={option + i} value={option.name}>
              {option.name}
            </option>
          );
        })}
      </Form.Select>
    </>
  );
}

FormSelect.propTypes = {
  inputName: PropTypes.string,
  labelText: PropTypes.string,
  error: PropTypes.object,
  register: PropTypes.func,
  options: PropTypes.array,
};
