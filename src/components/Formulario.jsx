import { Link } from 'react-router-dom';
import validarForm from '../hooks/validarForm.js';

export default function Formulario() {

    const { formData, errors, handleChange, handleSubmit, submitted, resetForm } = validarForm({
        nombre: "",
        apellido: "",
        celular: "",
        email: "",
        motivo: "",
        otroMotivo: "",
        mensaje: "",
    });

    if (submitted) {
        return (
            <div>
                <h3>{formData.nombre}, gracias por contactarte con nosotros.</h3>
                <p> Ya enviamos tu consulta! Pronto nos vamos a estar comunicando con vos.</p>

                <p>Volver al <Link to="/" className=''>Inicio</Link></p>

                <button onClick={resetForm} className=''>
                    Hacer nueva consulta
                </button>

            </div>
        )
    }

    return (

        <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">

            <h2 className='text-xl font-semibold mb-4'>Formulario de Contacto</h2>

            <div className="flex flex-col gap-1">
                <label htmlFor='Nombre'>Nombre</label>
                <input id='Nombre' name="nombre" type='text' value={formData.nombre} onChange={handleChange} placeholder='Nombre' maxLength={30} className="px-3 py-2 border border-black rounded-md focus:outline-none" />
                {errors.nombre && <p className="text-red-400">{errors.nombre}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor='Apellido'>Apellido</label>
                <input id='Apellido' name="apellido" type='text' value={formData.apellido} onChange={handleChange} placeholder='Apellido' maxLength={30} className="px-3 py-2 border border-black rounded-md focus:outline-none" />
                {errors.apellido && <p className="text-red-400">{errors.apellido}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor='Celular'>Celular</label>
                <input id='Celular' name="celular" type='text' value={formData.celular} onChange={handleChange} placeholder='Celular. Ej 11 2345 6789' className="px-3 py-2 border border-black rounded-md focus:outline-none" />
                {errors.celular && <p className="text-red-400">{errors.celular}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor='Email'>Correo Electrónico</label>
                <input id='Email' name="email" type='text' value={formData.email} onChange={handleChange} placeholder='Email' className="px-3 py-2 border border-black rounded-md focus:outline-none" />
                {errors.email && <p className="text-red-400">{errors.email}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor='Motivo'>Seleccione un motivo</label>
                <select id='Motivo' name="motivo" value={formData.motivo} onChange={handleChange} className="px-3 py-2 border border-black rounded-md focus:outline-none">
                    <option value="">--Motivo del Contacto--</option>
                    <option value="consulta">Consulta</option>
                    <option value="bug">Reportar error en el sitio</option>
                    <option value="infoError">Información incorrecta en el sitio</option>
                    <option value="otro">Otro</option>
                </select>
                {errors.motivo && <p className="text-red-400">{errors.motivo}</p>}
            </div>

            {formData.motivo === "otro" && (
                <div className="flex flex-col gap-1">
                    <input name="otroMotivo" type='text' value={formData.otroMotivo} onChange={handleChange} placeholder='Especifique el motivo' maxLength={50} className='px-3 py-2 border border-black rounded-md focus:outline-none' />
                    {errors.otroMotivo && <p className="text-red-400">{errors.otroMotivo}</p>}
                </div>
            )}

            <div className="flex flex-col gap-1">
                <label htmlFor='Mensaje'>Mensaje</label>
                <textarea id='Mensaje' name="mensaje" type='text' value={formData.mensaje} onChange={handleChange} placeholder='Escribí acá tu mensaje...' maxLength={300} className='px-3 py-2 border border-black rounded-md focus:outline-none' ></textarea>
                {errors.mensaje && <p className="text-red-400">{errors.mensaje}</p>}
            </div>

            <button type='submit' className=''>Enviar</button>

        </form>
    </div>
    )
}