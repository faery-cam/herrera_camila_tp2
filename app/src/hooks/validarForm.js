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

    //validación en vivo
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        let msjError = "";

        //para regex
        if (name === "email" && !emailRegex.test(value)) {
            msjError = "Mail inválido"
        }
        if (name === "celular" && !validarCel(value)) {
            msjError = "Celular inválido, por favor ingresá solo números, incluyendo el código de área, sin el +54."
        }

        //para cant. de caracteres
        if (name === "nombre" && value.length > 30) {
            msjError = "Máximo 30 caracteres.";
        }
        if (name === "apellido" && value.length > 30) {
            msjError = "Máximo 30 caracteres.";
        }
        if (name === "otroMotivo" && value.length > 30) {
            msjError = "Máximo 30 caracteres.";
        }
        if (name === "mensaje" && value.length > 30) {
            msjError = "Máximo 30 caracteres.";
        }

        setErrors(prev => ({ ...prev, [name]: msjError }));
    }

    function handleSubmit(event) {

        event.preventDefault();
        const { nombre, apellido, celular, email, motivo, otroMotivo, mensaje } = formData;
        const newErrors = {};

        if (!nombre.trim()) {
            newErrors.nombre = "Completá con tu Nombre.";
        } else if (nombre.length > 30) {
            newErrors.nombre = "Máximo 30 caracteres.";
        }

        if (!apellido.trim()) {
            newErrors.apellido = "Completá con tu Apellido.";
        } else if (apellido.length > 30) {
            newErrors.apellido = "Máximo 30 caracteres.";
        }

        if (!validarCel(celular)) newErrors.celular = "Celular inválido, por favor ingresá solo números, incluyendo el código de área, sin el +54.";

        if (!emailRegex.test(email)) newErrors.email = "Mail inválido";

        if (!motivo) newErrors.motivo = "Elegí un motivo de contacto.";

        if (motivo === "otro" && !otroMotivo.trim()) {
            newErrors.otroMotivo = "Escribí el motivo de contacto";
        } else if (otroMotivo.length > 50) {
            newErrors.otroMotivo = "Máximo 50 caracteres.";
        }

        if (!mensaje.trim()) {
            newErrors.mensaje = "El mensaje no puede quedar vacío.";
        } else if (mensaje.length > 300) {
            newErrors.mensaje = "Máximo 300 caracteres.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
        }
    }

    return { formData, errors, handleChange, handleSubmit, submitted, resetForm }
}