import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { states, departments } from '../utils/selectOptions';
import { Form, Button, Container, Row, Alert } from 'react-bootstrap';
import { EmployeesContext } from '../utils/context';

export default function App() {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: 'onSubmit',
  });
  const { isSubmitting, errors, isSubmitSuccessful } = formState;
  const [alert, setAlert] = useState(false);
  const { addEmployee } = useContext(EmployeesContext);

  const onSubmit = (newEmployee) => {
    if (isSubmitSuccessful) {
      reset();
      setAlert(true);
      addEmployee(newEmployee);
    }
  };

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Form
          className="mt-3"
          onSubmit={handleSubmit(onSubmit)}
          id="create-employee"
        >
          <Row className="d-flex justify-content-around">
            <fieldset className="col-4">
              <legend className="h5 text-center m-0">Identity</legend>
              <Form.Label className="mt-3" htmlFor="first-name">
                First Name*
                {errors.firstName && (
                  <span className="text-danger"> required</span>
                )}
              </Form.Label>
              <Form.Control
                {...register('firstName', {
                  required: true,
                })}
                type="text"
                id="first-name"
                isInvalid={errors.firstName}
              />

              <Form.Label className="mt-3" htmlFor="last-name">
                Last Name*
                {errors.lastName && (
                  <span className="text-danger"> required</span>
                )}
              </Form.Label>
              <Form.Control
                {...register('lastName', {
                  required: true,
                })}
                type="text"
                id="last-name"
                isInvalid={errors.lastName}
              />

              <Form.Label className="mt-3" htmlFor="date-of-birth">
                Date of Birth*
                {errors.birthdate && (
                  <span className="text-danger"> required</span>
                )}
              </Form.Label>
              <Form.Control
                {...register('birthdate', {
                  required: true,
                })}
                id="date-of-birth"
                type="date"
                isInvalid={errors.birthdate}
              />

              <Form.Label className="mt-3" htmlFor="start-date">
                Start Date*
                {errors.startDate && (
                  <span className="text-danger"> required</span>
                )}
              </Form.Label>
              <Form.Control
                {...register('startDate', {
                  required: true,
                })}
                id="start-date"
                type="date"
                isInvalid={errors.startDate}
              />
            </fieldset>

            <fieldset className="col-4">
              <legend className="h5 text-center m-0">Address</legend>

              <Form.Label className="mt-3" htmlFor="street">
                Street*
                {errors.street && (
                  <span className="text-danger"> required</span>
                )}
              </Form.Label>
              <Form.Control
                {...register('street', { required: true })}
                id="street"
                type="text"
                isInvalid={errors.street}
              />

              <Form.Label className="mt-3" htmlFor="city">
                City*
                {errors.city && <span className="text-danger"> required</span>}
              </Form.Label>
              <Form.Control
                {...register('city', { required: true })}
                id="city"
                type="text"
                isInvalid={errors.city}
              />

              <Form.Label className="mt-3" htmlFor="state">
                State*
                {errors.state && <span className="text-danger"> required</span>}
              </Form.Label>
              <Form.Select
                {...register('state', { required: true })}
                defaultValue=""
                id="state"
                isInvalid={errors.state}
              >
                <option value="" disabled hidden>
                  Choose here
                </option>
                {states.map((state, i) => {
                  return (
                    <option
                      key={state.abbreviation + i}
                      value={state.abbreviation}
                    >
                      {state.name}
                    </option>
                  );
                })}
              </Form.Select>

              <Form.Label className="mt-3" htmlFor="zip-code">
                Zip Code*
                {errors.zipCode && (
                  <span className="text-danger"> required</span>
                )}
              </Form.Label>
              <Form.Control
                {...register('zipCode', { required: true })}
                id="zip-code"
                type="number"
                isInvalid={errors.zipCode}
              />
            </fieldset>
          </Row>

          <Row className="col-6 my-3 mx-auto">
            <Form.Label className="mt-1" htmlFor="department">
              Department*
              {errors.department && (
                <span className="text-danger"> required</span>
              )}
            </Form.Label>
            <Form.Select
              defaultValue=""
              {...register('department', { required: true })}
              className="form-select"
              id="department"
              isInvalid={errors.department}
            >
              <option value="" disabled hidden>
                Choose here
              </option>
              {departments.map((department, i) => {
                return (
                  <option key={department.name + i}>{department.name}</option>
                );
              })}
            </Form.Select>
            <div className="text-center mt-4">
              <Button disabled={isSubmitting} type="submit">
                Save
              </Button>
            </div>
          </Row>
        </Form>
      </Row>
      {alert && (
        <Alert
          variant="success"
          className="alert-dismissible fade show position-absolute  top-50 start-50 translate-middle p-4"
          style={{ width: '340px' }}
        >
          <Alert.Heading className="m-0 text-center">
            Employee Created!
          </Alert.Heading>
          <button
            type="button"
            className="btn-close p-2"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setAlert(false)}
          ></button>
        </Alert>
      )}
    </Container>
  );
}
