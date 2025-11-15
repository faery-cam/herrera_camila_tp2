export default function MemberMedia({ activeMember }) {
    return (
        <div>
            <div>
                <h4>Videos de {activeMember.nombre}</h4>
            </div>
            <div>
                <h4>Fotos de {activeMember.nombre}</h4>
            </div>
        </div>
    )
}