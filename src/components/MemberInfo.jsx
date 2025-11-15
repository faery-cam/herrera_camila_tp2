export default function MemberInfo({ activeMember }) {
    return (
        <div>
            <h3>{activeMember.nombre}</h3>
            <p>{activeMember.bio}</p>
        </div>
    );
}