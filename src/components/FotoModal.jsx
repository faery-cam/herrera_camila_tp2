import { useState } from "react";
import { getAsset } from "../utils/assets.js";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function FotoModal({ images, indexInicial, cerrar }) {
    const [imgActiva, setImgActiva] = useState(indexInicial);

    const anteriorImg = () => {
        setImgActiva((prev) => (prev - 1 + images.length) % images.length);
    };

    const siguienteImg = () => {
        setImgActiva((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={cerrar} >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-neutral-900/60 rounded-2xl shadow-xl flex items-center justify-center p-4 md:p-6 
                w-[90vw] min-h-[60vh] max-h-[80vh] 
                md:w-[65vw] md:h-[75vh]"
            >
                <button
                    onClick={cerrar}
                    className="absolute top-3 right-3 text-white text-2xl"
                >
                    <X />
                </button>

                <button
                    onClick={anteriorImg}
                    className="absolute left-3 md:left-5 text-white text-3xl"
                >
                    <ChevronLeft />
                </button>

                <img
                    src={getAsset(images[imgActiva].src)}
                    alt={images[imgActiva].titulo}
                    className="max-h-full max-w-full object-contain rounded-lg"
                />

                <button
                    onClick={siguienteImg}
                    className="absolute right-3 md:right-5 text-white text-3xl"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
}
