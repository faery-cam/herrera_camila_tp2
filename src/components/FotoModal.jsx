import { useState } from "react";
import { getAsset } from "../utils/assets.js";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function FotoModal({ images, datosFiltrados, indexInicial, cerrar }) {
  const [imgActiva, setImgActiva] = useState(indexInicial);

  const anteriorImg = () => {
    if (imgActiva > 0) setImgActiva(imgActiva - 1);
  };

  const siguienteImg = () => {
    if (imgActiva < images.length - 1) setImgActiva(imgActiva + 1);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={cerrar}
      >
        <X />
      </button>

      <button
        className="absolute left-4 text-white text-3xl"
        onClick={anteriorImg}
        disabled={imgActiva === 0}
      >
        <ChevronLeft />
      </button>

      <img
        src={getAsset(datosFiltrados[imgActiva].src)}
        alt={datosFiltrados[imgActiva].titulo}
        className="max-h-[80vh] max-w-[80vw] object-contain"
      />

      <button
        className="absolute right-4 text-white text-3xl"
        onClick={siguienteImg}
        disabled={imgActiva === datosFiltrados.length - 1}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
