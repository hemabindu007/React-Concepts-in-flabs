import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './Home.css';
import reactImg from './assets/react.svg'
function Home() {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar fixed-top shadow-sm">
      <Container fluid>
        <div className="w-100 d-flex justify-content-between align-items-center">
          <Navbar.Brand as={Link} to="/page/gsap" className="d-flex align-items-center gap-2 nav-brand" style={{ paddingRight: '2rem', minWidth: 0 }}>
            <img
              src={reactImg}
              alt="img not found"
              style={{ height: '40px', width: 'auto' }}
              className="img-style"
            />
            <span className="fw-bold fs-5 text-dark" style={{ whiteSpace: 'nowrap' }}>
              React Concepts
            </span>
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            {/* Toggle for mobile view */}
            <Navbar.Toggle aria-controls="navbarScroll" />

            {/* Links on the far right */}
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Nav className="align-items-center ms-auto" style={{ gap: '1.5rem' }} navbarScroll>
                <Nav.Link as={Link} to="/page/" className="text-dark fw-bold">
                  Gsap
                </Nav.Link>
                <Nav.Link as={Link} to="/page/cssAnimi" className="text-dark fw-bold">
                  CssAnimi
                </Nav.Link>
                <Nav.Link as={Link} to="/page/farmerMotion" className="text-dark fw-bold">
                  Farmer Motion
                </Nav.Link>
                <Nav.Link as={Link} to="/page/users" className="text-dark fw-bold">
                 Users
                </Nav.Link>
                <Nav.Link as={Link} to="/page/tabdata" className="text-dark fw-bold">
                 Tabdata
                </Nav.Link>
                <Nav.Link as={Link} to="/page/load" className="text-dark fw-bold">
                 Load&Counter
                </Nav.Link>
                <Nav.Link as={Link} to="/page/timer" className="text-dark fw-bold">
                 Timer&Theme
                </Nav.Link>
                <Nav.Link as={Link} to="/page/focus" className="text-dark fw-bold">
                 Focus&ExCount
                </Nav.Link>
                <Nav.Link as={Link} to="/page/reduxCount" className="text-dark fw-bold">
                 ReduxCounter
                </Nav.Link>
                {/* Add more Nav.Links here as needed */}
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Home;
