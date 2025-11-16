import { useEffect } from "react";
import fotosData from "../data/fotosData.js"
import useFiltro from "../hooks/useFiltro.js"
import FiltroSelect from "../components/FiltroSelect.jsx"
import { getAsset } from "../utils/assets.js";

export default function Galeria() {
    const { filtros, modo, setModo, toggleFiltro, cleanFiltros, datosFiltrados, } = useFiltro(fotosData);

    const opciones = {
        miembros: ["Shibaken", "Marin", "Haneru", "Kanata", "Naoya", "Masato", "Rion"],
        estilo: []
    }

    useEffect(() => {
        document.title = "Fotos";
    }, []);

    return (
        <>
            <h2 className="text-2xl font-bold">Galería de fotos</h2>

            <FiltroSelect
                opciones={opciones}
                filtros={filtros}
                modo={modo}
                setModo={setModo}
                toggleFiltro={toggleFiltro}
                cleanFiltros={cleanFiltros}
            />

            <section className="">
                {datosFiltrados.map(foto => (
                    <img key={foto.id} src={getAsset(foto.src)} alt={foto.titulo} />
                ))}
            </section>
        </>
    )

}