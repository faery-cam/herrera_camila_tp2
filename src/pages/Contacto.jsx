import { useEffect } from 'react';
import Formulario from '../components/Formulario.jsx';

export default function Contacto() {

    useEffect(() => {
        document.title = "Formulario de contacto";
    }, []);

    return (
        <section className="p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Contacto</h2>
            <Formulario />

        </section>

    )

}