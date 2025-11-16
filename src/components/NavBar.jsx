import { useEffect, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import paginasData from '../data/paginasData';

export default function NavBar() {
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

            {open && (<div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40" aria-hidden />)}

            <aside id="main-menu"
                role="navigation"
                className={`
                    fixed top-0 left-0 h-full  bg-pink-500 text-white z-50
                
                    w-64 transform transition-transform duration-300
                ${open ? 'translate-x-0' : '-translate-x-full'}
                
                md:translate-x-0 md:w-16 md:hover:w-64
                md:transition-all md:duration-300 md:transform-none
                `}>



                <nav className='mt-6'>
                    <div>
                        <span className="sr-only">Menú</span>
                        <button onClick={() => setOpen(false)} aria-label="Cerrar" className="text-white/80 md:hidden">
                            ✕
                        </button>
                    </div>

                    <ul className="flex flex-col gap-1">
                        {paginasData.map((pag) =>
                            <li key={pag.to}
                                className='relative group py-2 px-3 cursor-pointer'
                            >
                                <NavLink to={pag.to}
                                    className={({ isActive }) => linkClass(isActive)}
                                    onClick={() => setOpen(false)}>
                                    {pag.label}
                                </NavLink>

                                {pag.children && (
                                    <ul className='
                                    block flex-col mt-1lg:ml-1 
                                    scale-y-100 backdrop-opacity-100 
                                    lg:max-h-0 lg:scale-y-0 lg:opacity-0 lg:overflow-hidden

                                    lg:group-hover:max-h-screen lg:group-hover:scale-y-100 lg:group-hover:opacity-100
                                    
                                    transform origin-top transition-all duration-300 ease-in-out'
                                    >
                                        {pag.children.map((child) => (

                                            <li key={child.to} className='py-1c px-4' >
                                                <NavLink to={child.to}
                                                    onClick={() => setOpen(false)}
                                                    className={({ isActive }) => linkClass(isActive)}


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
