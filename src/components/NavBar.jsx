import { useEffect, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { X, Menu } from 'lucide-react';
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
                <Menu />

            </button>

            {open && (<div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40" aria-hidden />)}

            <aside id="main-menu"
                role="navigation"
                className={`
                    fixed top-0 left-0 h-full bg-pink-500 text-white z-50
                    w-64 transform transition-transform duration-300
                    ${open ? 'translate-x-0' : '-translate-x-full'}
                    md:translate-x-0 md:w-16 md:hover:w-64
                    md:transition-all md:duration-300 md:transform-none
                    group
                `}>

                <nav className='mt-6'>
                    <div>
                        <span className="sr-only">Menú</span>
                        <button onClick={() => setOpen(false)} aria-label="Cerrar" className="text-white/80 md:hidden">
                            <X />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-1">
                        {paginasData.map((pag) => {
                            const Icon = pag.icon;
                            const isChildActive = pag.children?.some(child => location.pathname === child.to);
                            const isActive = location.pathname === pag.to;

                            return (
                                <li key={pag.label}
                                    className='relative group/parent py-2 px-3 cursor-pointer'
                                >
                                    {pag.to ? (
                                        <NavLink
                                            to={pag.to}
                                            className={({ isActive }) => linkClass(isActive)}
                                            onClick={() => setOpen(false)}
                                        >
                                            <div className="flex items-center gap-2">
                                                <Icon className={`w-6 h-6 ${isActive || isChildActive
                                                    ? "text-white"
                                                    : "text-black/90"
                                                    }`} />
                                                <p className="inline md:hidden md:group-hover:block">
                                                    {pag.label}
                                                </p>
                                            </div>
                                        </NavLink>
                                    ) : (
                                        <div
                                            className="flex items-center gap-2 cursor-default"
                                        >
                                            <Icon className={`w-6 h-6 ${isChildActive ? "text-white" : "text-black/90"}`} />
                                            <div className={`inline md:hidden md:group-hover:block ${isChildActive ? "text-white" : "text-black/90"}`}>
                                                {pag.label}
                                            </div>
                                        </div>
                                    )}

                                    {pag.children && (
                                        <ul className="
                                            max-h-screen opacity-100 scale-y-100
                                            md:max-h-0 md:opacity-0 md:scale-y-0 md:overflow-hidden
                                            md:group-hover/parent:max-h-screen
                                            md:group-hover/parent:opacity-100
                                            md:group-hover/parent:scale-y-100
                                            transition-all duration-300 origin-top
                                        ">
                                            {pag.children.map((child) => {
                                                const Icon = child.icon;

                                                return (
                                                    <li key={child.label} className='py-1 px-4' >
                                                        <NavLink to={child.to}
                                                            onClick={() => setOpen(false)}
                                                            className={({ isActive }) => linkClass(isActive)}
                                                        >
                                                            <div className="flex items-center gap-1">
                                                                <Icon className="w-5 h-5 mr-2" />
                                                                {child.label}
                                                            </div>
                                                        </NavLink>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside >
        </>
    )
}
