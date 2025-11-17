import { useState, useEffect } from "react";
import videosData from "../data/videosData.js";
import VideoCard from "../components/VideoCard.jsx";
import VideoModal from "../components/VideoModal.jsx";
import useFiltro from "../hooks/useFiltro.js";
import FiltroSelect from "../components/FiltroSelect.jsx";


export default function Videos() {
    const { filtros, modo, setModo, toggleFiltro, cleanFiltros, datosFiltrados, } = useFiltro(videosData);

    const [videoActivo, setVideoActivo] = useState(null);

    useEffect((() => {
        if (videoActivo) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }), [videoActivo])

    const opciones = {
        miembros: ["Shibaken", "Marin", "Haneru", "Kanata", "Naoya", "Masato", "Rion"],
        estilo: []
    }

useEffect(() => {
  document.title = "Videos";
}, []);

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

            <section className="flex justify-center md:justify-start flex-wrap gap-4">
                {datosFiltrados.map(video => (

                    <div key={video.id} onClick={() => setVideoActivo(video)}>
                        <VideoCard key={video.id} video={video} />
                    </div>
                ))}
            </section>

            {videoActivo && (
                <VideoModal video={videoActivo}
                    datosFiltrados={datosFiltrados}
                    onChangeVideo={(vid) => setVideoActivo(vid)}
                    onClose={() => setVideoActivo(null)} />
            )}

        </>
    )
}