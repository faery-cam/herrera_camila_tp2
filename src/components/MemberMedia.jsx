import { Link } from "react-router-dom"

export default function MemberMedia({ activeMember }) {
    return (
        <div className="
            grid grid-cols-2 gap-4
            md:grid-cols-1">




            <div className="px-4 py-3">
                <h4 className="text-lg font-semibold">Videos de {activeMember.nombre}</h4>
            </div>





            <div className="px-4 py-3">
                <h4 className="text-lg font-semibold">Fotos de {activeMember.nombre}</h4>
            </div>
        </div>
    )
}