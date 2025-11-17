import { useEffect } from "react"


export default function Historia() {

    useEffect(() => {
        document.title = "Historia";
    }, []);

    return (
        <>
            <section className="max-w-3xl mx-auto bg-white/20 backdrop-blur-md rounded-lg p-6 flex flex-col items-center text-center gap-4">
                <h2 className="text-2xl font-bold">Historia del grupo</h2>

                <p>ANATASHIA es un grupo de danza japonés de cinco miembros. Están representados por METEORA st.</p>

                <p>Formado en 2015 con el objetivo de participar en el festival de baile "NicoNico D@nce M@ster", el grupo de baile se centra en el breakdance y la acrobacia, y principalmente publica "vídeos de versiones de baile" en YouTube.</p>

                <p>El nombre del equipo proviene de otro nombre de la flor « Artemisia ». Dado que el significado de la flor es «desafío», el nombre expresa el deseo del equipo de superarse constantemente. La abreviatura es Tasia. El nombre colectivo de los aficionados es Tiara.</p>

            </section>
        </>
    )
}