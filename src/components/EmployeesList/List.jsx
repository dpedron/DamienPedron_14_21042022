import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSort,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

/**
 * Table of the employees
 * @param {function} getTableProps Used to resolve any props needed for the table wrapper
 * @param {function} getTableBodyProps Used to resolve any props needed for the table body wrapper
 * @param {Array.<Object>} page All pages to display
 * @param {function} prepareRow Responsible for lazily preparing a row for rendering
 * @param {Array} headerGroups Normalized header groups, each containing a flattened array of final column objects for that row
 * @returns {JSX}
 */

export default function List({
  getTableProps,
  getTableBodyProps,
  page,
  prepareRow,
  headerGroups,
}) {
  return (
    <Table striped bordered hover {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <FontAwesomeIcon
                        color="#007BFF"
                        className="mx-2"
                        icon={faSortUp}
                      />
                    ) : (
                      <FontAwesomeIcon
                        color="#007BFF"
                        className="mx-2"
                        icon={faSortDown}
                      />
                    )
                  ) : (
                    <FontAwesomeIcon
                      color="#d3d3d3"
                      className="mx-2"
                      icon={faSort}
                    />
                  )}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

List.propTypes = {
  getTableProps: PropTypes.func,
  getTableBodyProps: PropTypes.func,
  page: PropTypes.array,
  prepareRow: PropTypes.func,
  headerGroups: PropTypes.array,
};
