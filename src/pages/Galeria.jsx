import { useEffect } from "react";
import fotosData from "../data/fotosData.js"
import useFiltro from "../hooks/useFiltro.js"
import FiltroSelect from "../components/FiltroSelect.jsx"
import { getAsset } from "../utils/assets.js";

export default function Galeria() {
    const { filtros, modo, setModo, toggleFiltro, cleanFiltros, datosFiltrados, } = useFiltro(fotosData);

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
                        {datosFiltrados.map(foto => (

                            <div key={foto.id} className="aspect-square w-full overflow-hidden rounded-md bg-gray-200">

                                <img src={getAsset(foto.src)} alt={foto.titulo} className="w-full h-full object-cover" />
                                <p>{foto.titulo}</p>

                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )

}