import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import SelectMenu from 'select-menu--p14';
import { useEffect } from 'react';

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
  useEffect(() => {
    selectError();
  });

  function selectError() {
    const selectButton = document.getElementById(`${inputName}-button`);
    if (selectButton) {
      error
        ? (selectButton.style.borderColor = '#dc3545')
        : (selectButton.style.borderColor = '');
    }
  }

  return (
    <>
      <Form.Label className="mt-3 p-0" htmlFor={inputName}>
        {labelText}
        {error && <span className="text-danger"> required</span>}
      </Form.Label>
      <SelectMenu>
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
      </SelectMenu>
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
