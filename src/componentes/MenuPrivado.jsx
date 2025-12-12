import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Outlet } from 'react-router-dom';
import { getUsuario, logout } from '../seguranca/Autenticacao';

function MenuPrivado() {

    const Funcionario = getUsuario();

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavLink className="navbar-brand" exact="true"
                        to="/privado">Marcenaria</NavLink>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <NavLink className="nav-link active" exact="true"
                                to="/privado">Home</NavLink>

                            {Funcionario &&
                                <NavDropdown title="Manutenções" id="basic-nav-dropdown">

                                    <NavLink className="dropdown-item" exact="true"
                                        to="/clientes">Clientes</NavLink>

                                    <NavLink className="dropdown-item" exact="true"
                                        to="/pedidos">Pedidos</NavLink>

                                    <NavLink className="dropdown-item" exact="true"
                                        to="/materiais">Materiais</NavLink>

                                    <NavLink className="dropdown-item" exact="true"
                                        to="/itenspedido">Itens do Pedido</NavLink>

                                    <NavLink className="dropdown-item" exact="true"
                                        to="/funcionarios">Funcionários</NavLink>

                                </NavDropdown>
                            }

                            <NavLink className="nav-link active" exact="true"
                                to="/sobre">Sobre...</NavLink>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <NavDropdown title={Funcionario ? "Funcionario: " + Funcionario.nome : "Funcionario"} id="basic-nav-dropdown">
                            {Funcionario ?
                                <NavLink className="dropdown-item" exact="true"
                                    to="/MenuPublico" onClick={() => logout()}>Logout</NavLink>
                                :
                                <NavLink className="dropdown-item" exact="true"
                                    to="/login">login</NavLink>
                            }
                        </NavDropdown>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

            <Outlet />
        </>
    );
}

export default MenuPrivado;
