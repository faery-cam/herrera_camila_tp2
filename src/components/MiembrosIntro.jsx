import miembrosData from "../data/miembrosData.js";

export default function MiembrosIntro({ onSelect }) {

    return (
        <div>
            {miembrosData.map((member) => (
                <img
                    key={member.id}
                    src={member.img}
                    alt={member.nombre}
                    onClick={() => onSelect(member.id)}
                    className=""
                />
            ))}
        </div>
    );
}