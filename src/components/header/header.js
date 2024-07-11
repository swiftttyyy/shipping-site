import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/logo.png"
import "./header.css"

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="bg-body-tertiary nav">
      <Container>
        <Navbar.Brand className="title" href="/"><img className="logo" src={logo}/>Trust<span className='way'>Way</span> Shipping</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          
          </Nav>
          <Nav>
            <Nav.Link href="/track"><button className='header-button'>Track Shipment</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;



