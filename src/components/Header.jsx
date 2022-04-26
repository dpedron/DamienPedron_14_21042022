import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header({ linkTo, linkIcon, linkText }) {
  return (
    <Container fluid className="py-2 px-5">
      <Row>
        <Col className="d-flex align-items-center">
          <img src={logo} width="150px" alt="Wealth Health" />
          <h1 className="display-5">HRnet</h1>
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <Link className="text-decoration-none text-primary" to={linkTo}>
            <p className="fs-5 m-0">
              <FontAwesomeIcon className="mx-2" icon={linkIcon} />
              {linkText}
            </p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
