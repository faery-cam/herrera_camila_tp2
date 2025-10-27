import { NavLink } from "react-router-dom";

export default function NavBar() {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold" : "text-gray-500"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/info"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold" : "text-gray-500"
                        }
                    >
                        sobre este sitio
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink to="/aboutdev"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500 font-bold" : "text-gray-500"
                                }
                            >
                                tsuki
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500 font-bold" : "text-gray-500"
                                }
                            >
                                contacto
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/historia"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold" : "text-gray-500"
                        }
                    >
                        historia
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink to="/miembros"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500 font-bold" : "text-gray-500"
                                }
                            >
                                miembros
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/galeria"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold" : "text-gray-500"
                        }
                    >
                        galeria
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink to="/filtrovideos"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500 font-bold" : "text-gray-500"
                                }
                            >
                                filtro
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/baile"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold" : "text-gray-500"
                        }
                    >
                        Baile
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
