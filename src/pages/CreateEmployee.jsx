import EmployeeForm from '../components/EmployeeForm';
import Header from '../components/Header';
import headerIcon from '../assets/img/users-solid.svg';

export default function CreateEmployee() {
  return (
    <>
      <Header
        linkTo="/employee-list"
        linkText="Employee list"
        linkIcon={headerIcon}
      />
      <main className="row d-flex flex-column align-items-center">
        <div className="col-6 d-flex justify-content-center">
          <h1 className="h3">Create Employee</h1>
        </div>
        <EmployeeForm />
      </main>
    </>
  );
}
