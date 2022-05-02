import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

/**
 * To change the number of employee display on the list
 * @param {number} pageSize Number of employees display per page
 * @param {function} setPageSize Change the number of employees display per page
 * @returns {JSX}
 */

export default function NumberPerPages({ pageSize, setPageSize }) {
  return (
    <Col className="d-flex align-items-center">
      <p className="me-2 my-0">Show</p>
      <Form.Select
        size="sm"
        style={{ width: '70px' }}
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 25, 50, 100].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </Form.Select>
      <p className="ms-2 my-0">entries</p>
    </Col>
  );
}

NumberPerPages.propTypes = {
  pageSize: PropTypes.number,
  setPageSize: PropTypes.func,
};
