import { useMemo, useState } from "react";

export default function useFiltro(data, filtroInicial = null) {

    const [filtros, setFiltros] = useState(() => filtroInicial || {
        miembros: [],
        estilo: [],
    })
    const [modo, setModo] = useState("OR");

    const toggleFiltro = (categoria, valor) => {
        setFiltros(prev => {
            const activos = prev[categoria] || [];//guarda la categoria exacta que estamos modificando
            const existe = activos.includes(valor);//devuelve bool
            return {
                ...prev,
                [categoria]: existe ?
                    activos.filter(item => item !== valor) : //borra el valor = al item que se está filtrando
                    [...activos, valor] //agrega el valor
            };
        });
    };

    const cleanFiltros = () => {
        setFiltros({
            miembros: [],
            estilo: [],
        });
    };

    const datosFiltrados = useMemo(() => {
        return data.filter(item => {

            return Object.entries(filtros).every(([categoria, activos]) => {
                if (activos.length === 0) return true;

                const tagsItem = item[categoria] || [];

                if (modo === "AND") {
                    return activos.every(filtro => tagsItem.includes(filtro));
                } else {
                    return activos.some(filtro => tagsItem.includes(filtro));
                };
            });
        });
    }, [data, filtros, modo]);

    return {
        filtros,
        modo,
        setModo,
        toggleFiltro,
        cleanFiltros,
        datosFiltrados,
    }
}