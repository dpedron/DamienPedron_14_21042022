import { Col, Form } from 'react-bootstrap';

/**
 * Search in the table
 * @param {string} filter Search input value
 * @param {function} setFilter Set the search input value
 * @returns {JSX}
 */

export default function Search({ filter, setFilter }) {
  return (
    <Col className="d-flex align-items-center justify-content-end">
      <p className="my-0 me-2">Search :</p>
      <Form.Control
        size="sm"
        style={{ width: '170px' }}
        type="text"
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
      ></Form.Control>
    </Col>
  );
}
