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
        estilo: ["energético", "tierno", "dramático", "divertido"]
    }

    useEffect(() => {
        document.title = "Videos";
    }, []);

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Galería de videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6" >
                <FiltroSelect
                    opciones={opciones}
                    filtros={filtros}
                    modo={modo}
                    setModo={setModo}
                    toggleFiltro={toggleFiltro}
                    cleanFiltros={cleanFiltros}
                />

                <section>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {datosFiltrados.map(video => (

                            <div key={video.id} onClick={() => setVideoActivo(video)} >
                                <VideoCard key={video.id} video={video} />
                            </div>
                        ))}
                    </div>
                </section>

                {videoActivo && (
                    <VideoModal video={videoActivo}
                        datosFiltrados={datosFiltrados}
                        onChangeVideo={(vid) => setVideoActivo(vid)}
                        onClose={() => setVideoActivo(null)} />
                )}
            </div>
        </>
    )
}