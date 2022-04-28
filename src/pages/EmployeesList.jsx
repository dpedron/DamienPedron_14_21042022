import Header from '../components/Header';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useMemo } from 'react';
import { Container, Row } from 'react-bootstrap';
import { EmployeesContext } from '../utils/context';
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from 'react-table/dist/react-table.development';
import { tableColumns } from '../utils/tableColumns';
import NumberPerPages from '../components/EmployeesList/NumberPerPages';
import PaginationTable from '../components/EmployeesList/PaginationTable';
import Search from '../components/EmployeesList/Search';
import List from '../components/EmployeesList/List';
import EntriesInfo from '../components/EmployeesList/EntriesInfo';

/**
 * Page with a table of all employees
 * @returns {JSX}
 */

export default function EmployeesList() {
  const { employeesData } = useContext(EmployeesContext);

  const columns = useMemo(() => tableColumns, []);

  const tableInstance = useTable(
    { columns, data: employeesData, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    pageOptions,
    page,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <Header linkTo="/" linkText="Create Employee" linkIcon={faUserPlus} />
      <main className="container d-flex flex-column align-items-center">
        <h1 className="h3 mb-3">Current Employees Employee</h1>
        <Container>
          <Row className="d-flex mb-3">
            <NumberPerPages pageSize={pageSize} setPageSize={setPageSize} />
            <Search filter={globalFilter} setFilter={setGlobalFilter} />
          </Row>
          <List
            getTableProps={getTableProps}
            getTableBodyProps={getTableBodyProps}
            page={page}
            prepareRow={prepareRow}
            headerGroups={headerGroups}
          />
          <Row>
            <EntriesInfo
              pageSize={pageSize}
              pageIndex={pageIndex}
              employeesData={employeesData}
            />
            <PaginationTable
              pageOptions={pageOptions}
              pageIndex={pageIndex}
              nextPage={nextPage}
              canNextPage={canNextPage}
              previousPage={previousPage}
              canPreviousPage={canPreviousPage}
              gotoPage={gotoPage}
            />
          </Row>
        </Container>
      </main>
    </>
  );
}
