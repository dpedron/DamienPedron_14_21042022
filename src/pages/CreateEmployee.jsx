import EmployeeForm from '../components/EmployeeForm';
import Header from '../components/Header';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export default function CreateEmployee() {
  return (
    <>
      <Header
        linkTo="/employee-list"
        linkText="Employee list"
        linkIcon={faUsers}
      />
      <main className="container d-flex flex-column align-items-center">
        <h1 className="h3">Create Employee</h1>
        <EmployeeForm />
      </main>
    </>
  );
}
