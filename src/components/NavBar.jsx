import { useEffect, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";

const paginas = [
    { to: '/', label: 'Home' },
    {
        to: '/info', label: 'sobre este sitio',
        children: [
            { to: '/aboutdev', label: 'tsuki' },
            { to: '/contacto', label: 'contacto' },
        ],
    },
    {
        to: '/historia',
        label: 'historia',
        children: [{ to: '/miembros', label: 'miembros' }],
    },
    {
        to: '/galeria',
        label: 'galeria',
        children: [{ to: '/videos', label: 'videos' }],
    },
    { to: '/baile', label: 'Baile' },
]

export default function NavBar({ compact }) {
    const location = useLocation(); //datos de la url actual
    const [open, setOpen] = useState(false);

    //cierra menú al cambiar ruta
    useEffect(() => {
        setOpen(false)
    }, [location.pathname]);

    //clases centralizadas para los links
    const linkClass = (isActive) =>
        isActive
            ? 'text-white bg-blue-600'
            : 'text-black/90 hover:bg-white/10';

    return (
        <>

            <button
                aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={open}
                aria-controls="main.menu"
                onClick={() => setOpen((prev) => !prev)}
                className="z-50 fixed top-4 left-4 w-10 h-10 rounded bg-black/40 text-white flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {
                open && (<div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40" aria-hidden />)
            }

            <aside id="main-menu"
                role="navigation"
                className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>

                <div>
                    <span className="sr-only">Menú</span>
                    <button onClick={() => setOpen(false)} aria-label="Cerrar" className="text-white/80">
                        ✕
                    </button>
                </div>

                <nav>
                    <ul className="flex flex-col gap-1">
                        {paginas.map((pag) =>
                            <li key={pag.to}>
                                <NavLink to={pag.to}
                                    className={({ isActive }) => linkClass(isActive)}
                                    onClick={() => setOpen(false)}>
                                    {pag.label}
                                </NavLink>

                                {pag.children && (
                                    <ul>
                                        {pag.children.map((child) => (

                                            <li key={child.to}>
                                                <NavLink to={child.to}
                                                    className={({ isActive }) => linkClass(isActive)}
                                                    onClick={() => setOpen(false)}
                                                >
                                                    {child.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>

                                )}
                            </li>
                        )}
                    </ul>
                </nav>
            </aside >
        </>
    )
}
