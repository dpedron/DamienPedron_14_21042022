import Header from '../components/Header';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { states, departments } from '../utils/selectOptions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { EmployeesContext } from '../utils/context';
import FormInput from '../components/EmployeeForm/FormInput';
import FormSelect from '../components/EmployeeForm/FormSelect';
import CustomAlert from '../components/CustomAlert';

/**
 * Page with a form to create a new employee
 * @returns {JSX}
 */

export default function CreateEmployee() {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onTouched',
  });
  const { isSubmitting, errors } = formState;
  const [alert, setAlert] = useState(false);
  const { addEmployee } = useContext(EmployeesContext);

  const onSubmit = (newEmployee) => {
    // Show alert, add employee to the list
    setAlert(true);
    addEmployee(newEmployee);
  };

  return (
    <>
      <Header
        linkTo="/employee-list"
        linkText="Employee list"
        linkIcon={faUsers}
      />
      <main className="container d-flex flex-column align-items-center">
        <h1 className="h3 m-0">Create Employee</h1>
        <Container fluid>
          <Row className="d-flex justify-content-center">
            <Form
              className="mt-3"
              onSubmit={handleSubmit(onSubmit)}
              id="create-employee"
            >
              <Row className="d-flex flex-lg-row flex-column justify-content-around">
                <fieldset className="col-12 col-lg-4">
                  <legend className="h5 text-center mt-3">Identity</legend>

                  <FormInput
                    inputName="firstName"
                    labelText="First Name*"
                    error={errors.firstName}
                    register={register}
                    type="text"
                  />

                  <FormInput
                    inputName="lastName"
                    labelText="Last Name*"
                    error={errors.lastName}
                    register={register}
                    type="text"
                  />

                  <FormInput
                    inputName="birthdate"
                    labelText="Date of Birth*"
                    error={errors.birthdate}
                    register={register}
                    type="date"
                  />
                  <FormInput
                    inputName="startDate"
                    labelText="Start Date*"
                    error={errors.startDate}
                    register={register}
                    type="date"
                  />
                </fieldset>

                <fieldset className="col-12 col-lg-4">
                  <legend className="h5 text-center mt-3">Address</legend>

                  <FormInput
                    inputName="street"
                    labelText="Street*"
                    error={errors.street}
                    register={register}
                    type="text"
                  />

                  <FormInput
                    inputName="city"
                    labelText="City*"
                    error={errors.city}
                    register={register}
                    type="text"
                  />

                  <FormSelect
                    inputName="state"
                    labelText="State*"
                    error={errors.state}
                    register={register}
                    options={states}
                  />

                  <FormInput
                    inputName="zipCode"
                    labelText="Zip Code*"
                    error={errors.zipCode}
                    register={register}
                    type="number"
                  />
                </fieldset>
              </Row>

              <Row className="col-12 col-lg-4 my-3 mx-auto">
                <FormSelect
                  inputName="department"
                  labelText="Department*"
                  error={errors.department}
                  register={register}
                  options={departments}
                />
                <div className="text-center mt-4">
                  <Button disabled={isSubmitting} type="submit">
                    Save
                  </Button>
                </div>
              </Row>
            </Form>
          </Row>
        </Container>
      </main>
      {alert && (
        <CustomAlert
          setAlert={setAlert}
          variant="success"
          alertText="Employee Created!"
        />
      )}
    </>
  );
}
