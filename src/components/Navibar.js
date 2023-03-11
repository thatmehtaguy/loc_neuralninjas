import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Navibar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
      <>
        {['md'].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3 navigation-bar">
          <Container fluid>
            <Navbar.Brand href="#" className='navbrand'>Verify</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Verify
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {user && (
                    <div className='nav-contents'>
                      <span>{user.email}</span>
                      <Button onClick={handleClick}>Log out</Button>
                    </div>
                  )}
                  {!user && (
                    <div className='nav-contents'>
                      <Nav.Link href="/login">Login</Nav.Link>
                      <Nav.Link href="/signup">Signup</Nav.Link>
                    </div>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          </Navbar>
        ))}
      </>
  )
}

export default Navibar