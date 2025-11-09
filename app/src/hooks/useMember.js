import { useState } from "react";
import { miembros } from "../data/miembrosData.js"

export default function useMember() {
    const [activeMember, setActiveMember] = useState(miembros[0]);

    const siguiente = () => {
        const index = miembros.findIndex(miembro => miembro.id === activeMember.id);
        const nextIndex = (index + 1) % miembros.length;
        setActiveMember(miembros[nextIndex]);
    }

    const anterior = () => {
        const index = miembros.findIndex(miembro => miembro.id === activeMember.id);
        const prevIndex = (index - 1 + miembros.length) % miembros.length;
        setActiveMember(miembros[prevIndex]);
    }

    const seleccionarMember = (id) => {
        const seleccionado = miembros.find(miembro => miembro.id === id);
        if (seleccionado) setActiveMember(seleccionado);
    }
    
    return { activeMember, siguiente, anterior, seleccionarMember }
}
