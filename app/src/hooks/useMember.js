import { useState } from "react";
import miembrosData  from '../data/miembrosData.js';

export default function useMember() {
    const [activeMember, setActiveMember] = useState(miembrosData[0]);

    const siguiente = () => {
        const index = miembrosData.findIndex(miembro => miembro.id === activeMember.id);
        const nextIndex = (index + 1) % miembrosData.length;
        setActiveMember(miembrosData[nextIndex]);
    }

    const anterior = () => {
        const index = miembrosData.findIndex(miembro => miembro.id === activeMember.id);
        const prevIndex = (index - 1 + miembrosData.length) % miembrosData.length;
        setActiveMember(miembrosData[prevIndex]);
    }

    const seleccionarMember = (id) => {
        const seleccionado = miembrosData.find(miembro => miembro.id === id);
        if (seleccionado) setActiveMember(seleccionado);
    }

    return { activeMember, siguiente, anterior, seleccionarMember }
}
