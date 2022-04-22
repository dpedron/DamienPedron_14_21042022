import { Link } from 'react-router-dom';
import EmployeeTable from '../components/EmployeeTable';

export default function EmployeeList() {
  return (
    <main>
      <p>Employee List</p>
      <EmployeeTable />
      <Link to="/">Go back</Link>
    </main>
  );
}
