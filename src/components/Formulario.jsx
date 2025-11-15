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

        <form onSubmit={handleSubmit} className=''>

            <h2 className=''>Formulario de Contacto</h2>

            <div>
                <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder='Nombre' maxLength={30} className="" />
                {errors.nombre && <p className="text-red-400">{errors.nombre}</p>}
            </div>

            <div>
                <input name="apellido" value={formData.apellido} onChange={handleChange} placeholder='Apellido' maxLength={30} className="" />
                {errors.apellido && <p className="text-red-400">{errors.apellido}</p>}
            </div>

            <div>
                <input name="celular" value={formData.celular} onChange={handleChange} placeholder='Celular. Ej 11 2345 6789' className="" />
                {errors.celular && <p className="text-red-400">{errors.celular}</p>}
            </div>

            <div>
                <input name="email" value={formData.email} onChange={handleChange} placeholder='Email' className="" />
                {errors.email && <p className="text-red-400">{errors.email}</p>}
            </div>

            <div>
                <select name="motivo" value={formData.motivo} onChange={handleChange} className="">
                    <option value="">--Motivo del Contacto--</option>
                    <option value="consulta">Consulta</option>
                    <option value="bug">Reportar error en el sitio</option>
                    <option value="infoError">Información incorrecta en el sitio</option>
                    <option value="otro">Otro</option>
                </select>
                {errors.motivo && <p className="text-red-400">{errors.motivo}</p>}
            </div>

            {formData.motivo === "otro" && (
                <div>
                    <input name="otroMotivo" value={formData.otroMotivo} onChange={handleChange} placeholder='Especifique el motivo' maxLength={50} className='' />
                    {errors.otroMotivo && <p className="text-red-400">{errors.otroMotivo}</p>}
                </div>
            )}

            <div>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder='Escribí acá tu mensaje...' maxLength={300} className='' ></textarea>
                {errors.mensaje && <p className="text-red-400">{errors.mensaje}</p>}
            </div>

            <button type='submit' className=''>Enviar</button>

        </form>
    )
}