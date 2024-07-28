import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


function SiteNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/useState" className="nav-link">Use State</NavLink>
                        <NavLink to="/useEffect" className="nav-link">Use Effect</NavLink>
                        <NavLink to="/useRef" className="nav-link">Use Ref</NavLink>
                        <NavLink to="/useMemo" className="nav-link">Use Memo</NavLink>
                        <NavLink to="/useCallback" className="nav-link">Use callback</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNav;