import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Info() {

    useEffect(() => {
        document.title = "información";
    }, []);

    const linkClass = "underline underline-offset-4 hover:text-pink-300 transition";
    const pClass = "max-w-3xl";

    return (
        <>
            <section className="p-6 flex flex-col items-center text-center gap-4 bg-white border border-pink-200 rounded-md shadow-sm">
                <h2 className="text-2xl font-bold">Sobre este sitio</h2>

                <p className={pClass}>Si llegaste hasta acá eso no es casualidad! En esta página nos dedicamos a informar sobre el grupo Anatashia como guía introductoría para nuevos fans, aquellos que les interese los distintos tipos de danzas que practica el grupo o incluso a simples curiosos!</p>

                <p className={pClass}>¿No sabés por donde empezar?</p>

                <p className={pClass}>Podes ir a <Link to="/historia" className={linkClass}>Historia</Link> para conocer al grupo, y a <Link to="/miembros" className={linkClass}>Miembros</Link> para sabér más de cada uno individualmente.</p>
                
                <p className={pClass}>Si te interesa verlos en acción bailando podes ir directo a la <Link to="/videos" className={linkClass}>Galería de Videos</Link>.</p>

                <p className={pClass}>En <Link to="/baile" className={linkClass}>Baile</Link> vas a poder encontrar más información sobre los géneros que abarcan.</p>

                <p className={pClass}>¿Todavía te quedan dudas? En <Link to="/contacto" className={linkClass}>Contacto</Link> vas a poder escribirnos directamente así resolvemos tus preguntas!</p>

            </section>
        </>
    )

}