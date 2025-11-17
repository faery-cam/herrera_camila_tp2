import miembrosData from "../data/miembrosData.js";
import { getAsset } from "../utils/assets.js";

export default function MiembrosIntro({ onSelect }) {

    return (
        <div className="flex gap-4 overflow-x-auto py-4 px-2 scrollbar-none">
            {miembrosData.map((member) => (
                <div
                    key={member.id}
                    className="relative shrink-0 w-65 h-auto rounded-lg overflow-hidden cursor-pointer group hover:scale-105 "
                    onClick={() => onSelect(member.id)}>
                    <img
                        key={member.id}
                        src={getAsset(member.img)}
                        alt={member.nombre}
                        onClick={() => onSelect(member.id)}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            ))}
        </div>
    );
}