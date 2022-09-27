import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Navbars() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">JY.Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
