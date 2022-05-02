import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

/**
 * Shows the user the position of the entries he is looking at
 * @param {number} pageSize Number of employees display per page
 * @param {number} pageIndex Index of the current page
 * @param {Array.<Object>} employeesData
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

EntriesInfo.propTypes = {
  pageSize: PropTypes.number,
  pageIndex: PropTypes.number,
  employeesData: PropTypes.array,
};
