import { useEffect } from "react"

export default function Baile() {

    useEffect(() => {
        document.title = "Baile";
    }, []);

    return (
        <>
            <section className="p-6 flex flex-col items-center text-center gap-4 bg-white border border-pink-200 rounded-md shadow-sm">
                <h2 className="text-2xl font-bold">Baile</h2>

                <p >El breakdance o breaking (bboying) es una danza que forma parte de la cultura del hip hop, junto con el grafiti, rap y djing. Este elemento nace en las comunidades afroamericanas de los pueblos azules neoyorquinos como Bronx y Brooklyn, en Estados Unidos, en la década de 1970.
                </p>
                <p>
                    Pictograma deportivo del breaking
                    Breakdance es un término comercial utilizado por los medios para llamar a esta danza, pero su nombre original es breaking o bboying.
                </p>
                <p>
                    Japón tiene una escena de breaking muy fuerte y competitiva, con reconocidos b-boys y b-girls que han ganado medallas en eventos internacionales, como la B-Girl Ami, que ganó el oro en los Juegos Olímpicos de París 2024. La escena se caracteriza por su gran nivel técnico y atlético, y Tokio será la sede de la Final Mundial de Red Bull BC One en 2025.
                </p>
            </section>
        </>
    )

}