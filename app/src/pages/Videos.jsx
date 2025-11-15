import videosData from "../data/videosData.js"
import VideoCard from "../components/VideoCard.jsx"
import useFiltro from "../hooks/useFiltro.js"
import FiltroSelect from "../components/FiltroSelect.jsx"


export default function Videos() {
    const { filtros, modo, setModo, toggleFiltro, cleanFiltros, datosFiltrados, } = useFiltro(videosData);

    const opciones = {
        miembros: ["Shibaken", "Marin", "Haneru", "Kanata", "Naoya", "Masato", "Rion"],
        estilo: []
    }

    return (
        <>
            <h2 className="text-2xl font-bold">Galería de videos</h2>

            <FiltroSelect
                opciones={opciones}
                filtros={filtros}
                modo={modo}
                setModo={setModo}
                toggleFiltro={toggleFiltro}
                cleanFiltros={cleanFiltros}
            />

            <section className="">
                {datosFiltrados.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </section>
        </>
    )
}