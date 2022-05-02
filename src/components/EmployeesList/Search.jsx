import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

/**
 * Search in the table
 * @param {string} filter
 * @param {function} setFilter
 * @returns {JSX}
 */

export default function Search({ filter, setFilter }) {
  return (
    <Col className="d-flex align-items-center justify-content-end">
      <Form.Label htmlFor="search" className="my-0 me-2">
        Search :
      </Form.Label>
      <Form.Control
        id="search"
        size="sm"
        style={{ width: '170px' }}
        type="text"
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
      ></Form.Control>
    </Col>
  );
}

Search.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};
