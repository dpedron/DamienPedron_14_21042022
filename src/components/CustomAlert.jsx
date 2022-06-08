import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

/**
 * Custom alert
 * @param {function} setAlert
 * @param {string} variant To select the style of the alert
 * @param {string} alertText
 * @returns {JSX}
 */

export default function CustomAlert({ variant, alertText }) {
  return (
    <Container
      fluid
      className="position-absolute top-0"
      style={{ height: '100vh' }}
    >
      <Alert
        variant={variant}
        className="alert-dismissible fade show position-absolute top-50 start-50 translate-middle p-4"
        style={{ width: '340px' }}
      >
        <Alert.Heading className="m-0 text-center">{alertText}</Alert.Heading>
        <button
          type="button"
          className="btn-close p-2"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => document.location.reload()}
        ></button>
      </Alert>
    </Container>
  );
}

CustomAlert.propTypes = {
  setAlert: PropTypes.func,
  variant: PropTypes.string,
  alertText: PropTypes.string,
};
