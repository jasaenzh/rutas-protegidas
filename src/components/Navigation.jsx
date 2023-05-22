import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">
                Vengan Pues
            </Navbar.Brand>
            {/* Boton Menu aparece en dispositivos pequeños */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    {/* Lista Desplegable */}
                    <NavDropdown title="Apartamentos" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/apartments">Apartamento 101</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/apartments">Apartamento 202</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/apartments">Apartamento 302</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/apartments">Apartamento 402</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/reservas">Reservas</Nav.Link>
                    {/* Permisos usuario administrador */}
                    <NavDropdown title="Admin" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/admin/usuarios">Administrar Cuentas</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/admin/editar-reserva">Administrar Reservas</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                {/* Botones de Inicio de Sesión y Registro */}
                <Nav>
                    <Nav.Link as={Link} to="/iniciar-sesion">Iniciar Sesión</Nav.Link>
                    <Nav.Link as={Link} to="/registro">Registrarse</Nav.Link>
                    <Nav.Link as={Link} to="/cuenta">Mi Cuenta</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation