import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export default function Header({ linkTo, linkIcon, linkText }) {
  return (
    <header
      className="row p-2 d-flex justify-content-between align-items-center"
      style={{ height: '100px' }}
    >
      <div className="d-flex col-10 p-0 align-items-center">
        <img className="col-1" src={logo} alt="Wealth Health" />
        <h1 className="col-1 display-5">HRnet</h1>
      </div>
      <Link
        className="col-2 d-flex text-decoration-none font-weight-bold text-primary"
        to={linkTo}
      >
        <p className="fs-5 p-3 m-0 col-12 text-end">
          <img
            className="m-2"
            style={{ height: '30px' }}
            src={linkIcon}
            alt="employee list"
          />
          {linkText}
        </p>
      </Link>
    </header>
  );
}
