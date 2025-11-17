import { ChevronLeft, ChevronRight } from "lucide-react";
import miembrosData from "../data/miembrosData.js";
import { getAsset } from "../utils/assets.js";

export default function MemberSelect({ activeMember, siguiente, anterior, seleccionarMember }) {

    return (
        <div className="md:w-1/5 flex flex-col items-center">

            <div className="relative w-full flex items-center justify-center">
                <button onClick={anterior}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full"
                >
                    <ChevronLeft />
                </button>

                <img src={getAsset(activeMember.img)} alt={activeMember.nombre} className="w-full
                    max-w-sm
                    rounded-xl 
                    object-cover
                    " />

                <button onClick={siguiente}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full"
                >
                    <ChevronRight />
                </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {miembrosData.map((member) => (
                    <button
                        key={member.id}
                        onClick={() => seleccionarMember(member.id)}
                        className="px-4 py-1 
                        rounded-full 
                        bg-neutral-200 
                        hover:bg-neutral-300 
                        transition
                        text-sm" >
                        {member.nombre}
                    </button>
                ))}
            </div>
        </div>
    )
}