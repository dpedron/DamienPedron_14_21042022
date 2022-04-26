import { Pagination, Col } from 'react-bootstrap';

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
        })}
        <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
      </Pagination>
    </Col>
  );
}
