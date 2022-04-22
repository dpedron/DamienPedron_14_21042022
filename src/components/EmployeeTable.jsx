import { Table } from 'react-bootstrap';
import EmployeeRow from './EmployeeRow';

export default function EmployeeTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Start Date</th>
          <th>Department</th>
          <th> Date of Birth</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
        </tr>
      </thead>
      <tbody>
        <EmployeeRow />
      </tbody>
    </Table>
  );
}
