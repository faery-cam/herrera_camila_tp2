import miembrosData from "../data/miembrosData.js";
import { getAsset } from "../utils/assets.js";

export default function MiembrosIntro({ onSelect }) {

    return (
        <div>
            {miembrosData.map((member) => (
                <img
                    key={member.id}
                    src={getAsset(member.img)}
                    alt={member.nombre}
                    onClick={() => onSelect(member.id)}
                    className=""
                />
            ))}
        </div>
    );
}