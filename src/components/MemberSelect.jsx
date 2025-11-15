import miembrosData from "../data/miembrosData.js";
import { getAsset } from "../utils/assets.js";

export default function MemberSelect({ activeMember, siguiente, anterior, seleccionarMember }) {

    return (
        <div>
            <div>
                <button onClick={anterior}></button>
                <img src={getAsset(activeMember.img)} alt={activeMember.nombre} className="" />
                <button onClick={siguiente}></button>
            </div>

            <div>
                {miembrosData.map((member) => (
                    <button
                        key={member.id}
                        onClick={() => seleccionarMember(member.id)}
                        className="" >
                        {member.nombre}
                    </button>
                ))}
            </div>
        </div>
    )
}