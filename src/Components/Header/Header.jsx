import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div>
           <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand >Assignment</Navbar.Brand>
          <Nav className="mx-auto header">
            <Nav><Link to='/'>Home</Link></Nav>
            <Nav><Link to='/bookmark'>BookMark</Link></Nav>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;