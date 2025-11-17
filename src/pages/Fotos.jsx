import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import fotosData from "../data/fotosData.js";
import useFiltro from "../hooks/useFiltro.js";
import FiltroSelect from "../components/FiltroSelect.jsx";
import { getAsset } from "../utils/assets.js";
import FotoModal from "../components/FotoModal.jsx";

export default function Fotos() {
    const filtroInicial = useLocation().state?.filtroInicial;

    const { filtros, modo, setModo, toggleFiltro, cleanFiltros, datosFiltrados, } = useFiltro(fotosData, filtroInicial);

    const [imgActiva, setImgActiva] = useState(null);

    const opciones = {
        miembros: ["Shibaken", "Marin", "Haneru", "Kanata", "Naoya", "Masato", "Rion"],
    }

    useEffect(() => {
        document.title = "Fotos";
    }, []);

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Galería de fotos</h2>

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
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {datosFiltrados.map((foto, index) => (

                            <div key={foto.id} className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 cursor-pointer"
                                onClick={() => setImgActiva(index)}
                            >
                                <img src={getAsset(foto.src)} alt={foto.titulo} className="w-full h-full object-cover" />
                                <p>{foto.titulo}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {imgActiva !== null && (
                <FotoModal
                    images={datosFiltrados}
                    indexInicial={imgActiva}
                    cerrar={() => setImgActiva(null)}
                />
            )}

        </>
    )

}