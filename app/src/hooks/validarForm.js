import { useState } from 'react';

export default function validarForm(valoresIniciales) {

    const [formData, setFormData] = useState(valoresIniciales);

    const [errors, setErrors] = useState(valoresIniciales);

    const [submitted, setSubmitted] = useState(false);

    function resetForm() {
        setFormData(valoresIniciales);
        setErrors({});
        setSubmitted(false);
    }

    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]{1,64}(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i;
    const celRegex = /^(?:\d{10,11})$/;

    function validarCel(cel) {
        const limpio = cel.replace(/\D/g, "");
        return celRegex.test(limpio);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        let msjError = "";

        if (name === "email" && !emailRegex.test(value)) {
            msjError = "Mail inválido"
        } else if (name === "celular" && !validarCel(value)) {
            msjError = "Celular inválido, por favor ingresá solo números, incluyendo el código de área, sin el +54."
        }

        setErrors(prev => ({ ...prev, [name]: msjError }));
    }

    function handleSubmit(event) {

        event.preventDefault();
        const { nombre, apellido, celular, email, motivo, otroMotivo, mensaje } = formData;
        const newErrors = {};

        if (!nombre.trim()) newErrors.nombre = "Completá con tu Nombre.";
        if (!apellido.trim()) newErrors.apellido = "Completá con tu Apellido.";
        if (!validarCel(celular)) newErrors.celular = "Celular inválido, por favor ingresá solo números, incluyendo el código de área, sin el +54.";
        if (!emailRegex.test(email)) newErrors.email = "Mail inválido";
        if (!motivo) newErrors.motivo = "Elegí un motivo de contacto.";
        if (motivo === "otro" && !otroMotivo.trim()) newErrors.otroMotivo = "Escrbí el motivo de contacto";
        if (!mensaje.trim()) newErrors.mensaje = "El mensaje no puede quedar vacío.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
        }
    }

    return { formData, errors, handleChange, handleSubmit, submitted, resetForm }
}