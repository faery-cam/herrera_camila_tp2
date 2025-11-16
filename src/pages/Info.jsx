import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Info() {

    useEffect(() => {
        document.title = "información";
    }, []);

    return (
        <>
            <section className="p-6">
                <h2 className="text-2xl font-bold">Sobre este sitio</h2>

                <p>Si llegaste hasta acá eso no es casualidad! En esta página nos dedicamos a informar sobre el grupo ---- como guía introductoría para nuevos fans, aquellos que les interese los distintos tipos de danzas que practica el grupo o incluso a simples curiosos!</p>
                <p>¿No sabés por donde empezar?</p>
                <p>Podes ir a <Link to="/historia">Historia</Link> para conocer al grupo, y a <Link to="/miembros">Miembros</Link> para sabér más de cada uno individualmente.</p>
                <p>Si te interesa verlos en acción bailando podes ir directo a la <Link to="/videos">Galería de Videos</Link>.</p>
                <p>En <Link to="/baile">Baile</Link> vas a poder encontrar más información sobre los géneros que abarcan.</p>
                <p>¿Todavía te quedan dudas? En <Link to="/contacto">Contacto</Link> vas a poder escribirnos directamente así resolvemos tus preguntas!</p>

            </section>
        </>
    )

}