import { Pagination, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * Navigation of the table
 * @param {Array} pageOptions Index of all pages
 * @param {number} pageIndex Index of the current page
 * @param {function} nextPage Increases pageIndex by one
 * @param {boolean} canNextPage If there are pages and the current pageIndex is less than pageCount, this will be true
 * @param {function} previousPage Decreases pageIndex by one
 * @param {boolean} canPreviousPage If there are pages and the current pageIndex is greater than 0, this will be true
 * @param {function} setPageSize Change the number of employees display per page
 * @param {function} gotoPage Set pageIndex with the called value
 * @returns {JSX}
 */

export default function PaginationTable({
  pageOptions,
  pageIndex,
  nextPage,
  canNextPage,
  previousPage,
  canPreviousPage,
  gotoPage,
}) {
  return (
    <Col>
      <Pagination className="float-end">
        <Pagination.Prev
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        />
        {pageOptions.map((p) => {
          const nbOfPages = pageOptions.length;
          const currentPageIndex = pageIndex;

          // To display the pagination
          const displayPagination =
            // Always for the first, last, current, before and after current pages
            p === 0 ||
            p === nbOfPages - 1 ||
            p === currentPageIndex ||
            p === currentPageIndex + 1 ||
            p === currentPageIndex - 1 ||
            // For the 3, 4 and 5 last pages when current page is one of the last 3
            (currentPageIndex >= nbOfPages - 3 &&
              (p === nbOfPages - 3 ||
                p === nbOfPages - 4 ||
                p === nbOfPages - 5)) ||
            // For the 2, 3, 4 and 5 first pages when current page is one of the first 4
            (currentPageIndex < 4 &&
              (p === 1 || p === 2 || p === 3 || p === 4));

          // To display ellipsis
          const displayEllipsis =
            // After pagination 5, when there are more than 5 pages and current page is one of the first 4
            (p > 4 && p === 6) ||
            // On pagination 2 before and 2 after current page, when current page is between 5 and 4 from the end
            (currentPageIndex > 3 &&
              currentPageIndex < nbOfPages - 3 &&
              (p === currentPageIndex - 2 || p === currentPageIndex + 2)) ||
            // After pagination 1 when current page is one of the last 3 pages
            (currentPageIndex >= nbOfPages - 3 && p === 2);

          if (displayPagination) {
            return (
              <Pagination.Item
                key={`navigation-${p}`}
                onClick={(e) => {
                  gotoPage(Number(e.currentTarget.innerText) - 1);
                }}
                active={p === pageIndex}
              >
                {p + 1}
              </Pagination.Item>
            );
          } else {
            return displayEllipsis ? (
              <Pagination.Ellipsis key={`navigation-${p}`} disabled />
            ) : null; // !(displayPagination || displayEllipsis) then display nothing
          }
        })}
        <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
      </Pagination>
    </Col>
  );
}

PaginationTable.propTypes = {
  pageOptions: PropTypes.array,
  pageIndex: PropTypes.number,
  nextPage: PropTypes.func,
  canNextPage: PropTypes.bool,
  previousPage: PropTypes.func,
  canPreviousPage: PropTypes.bool,
  setPageSize: PropTypes.func,
  gotoPage: PropTypes.func,
};
