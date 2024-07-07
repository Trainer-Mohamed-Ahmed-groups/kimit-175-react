import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

// export default function SiteNav() {
//     return (
//         <ul>
//             <li>
//                 <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/about">About</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/products">Products</NavLink>
//             </li>
//         </ul>
//     )
// }


function SiteNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/products" className="nav-link">Products</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNav;