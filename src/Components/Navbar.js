import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function nav() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">JY.Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">남자옷</Nav.Link>
            <Nav.Link href="#pricing">여자옷</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default nav;
