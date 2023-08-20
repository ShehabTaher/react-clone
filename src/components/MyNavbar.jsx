import React, { useState } from 'react'
import ReactIcon from '../Asset/logo192.png'
import { Link, NavLink } from "react-router-dom";
import SearchBar from './SearchBar';
import ToggleSwitchMode from './ToggleSwitchMode';
import { LiaGithub } from 'react-icons/lia';

const MyNavbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav>

                <Link to="/" className="title">
                    <img src={ReactIcon} alt='Icon' width='50px' height='50px' />
                </Link>

                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <SearchBar />

                <ul className={menuOpen ? "open" : ""}>

                    <li>
                        <NavLink to="/learn">Learn</NavLink>
                    </li>
                    <li>
                        <NavLink to="/reference">Reference</NavLink>
                    </li>
                    <li>
                        <NavLink to="/comumunity">Comumunity</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs">Blogs</NavLink>
                    </li>
                </ul>
                <ToggleSwitchMode />
                <div className='link-list'>
                    <div className='social'>

                        <a href='https://github.com/facebook/react/releases'><LiaGithub style={{ width: '25px', height: '25px' }} /></a>
                    </div>
                </div>
            </nav>
            {/*             
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="#home">
                        <img src={ReactIcon} alt='Icon' width='50px' height='50px' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <SearchBar />
                            <Nav.Link href="#features">Link 1</Nav.Link>
                            <Nav.Link href="#pricing">Link 2</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Another Link</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Another Link
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}




        </>
    )
}

export default MyNavbar