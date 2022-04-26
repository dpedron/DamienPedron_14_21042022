import { Col } from 'react-bootstrap';

/**
 * Shows the user the position of the entries he is looking at
 * @param {number} pageSize Number of employees display per page
 * @param {number} pageIndex Index of the current page
 * @param {Array.<Object>} employeesData All employees data
 * @returns {JSX}
 */

export default function EntriesInfo({ pageSize, pageIndex, employeesData }) {
  return (
    <Col>
      {`Showing ${pageSize * pageIndex + 1} to ${
        pageSize * (pageIndex + 1) <= employeesData.length
          ? pageSize * (pageIndex + 1)
          : employeesData.length
      } of ${employeesData.length} entries`}
    </Col>
  );
}
