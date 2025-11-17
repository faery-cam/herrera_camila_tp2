import { useCallback, useEffect, useMemo } from "react"
import { X } from "lucide-react";
import VideoCard from "./VideoCard";

export default function VideoModal({ video, datosFiltrados, onChangeVideo, onClose }) {

    const id = new URL(video.src).searchParams.get("v");
    const embed = `https://www.youtube.com/embed/${id}`;

    const manejarTecla = useCallback(e => {
        if (e.key === "Escape") {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        window.addEventListener("keydown", manejarTecla);

        return () => {
            window.removeEventListener("keydown", manejarTecla);
        };
    }, [manejarTecla]);

    const recomendados = useMemo(() => {
        return datosFiltrados.filter(vid => vid.id !== video.id).slice(0, 5);
    }, [video]);

    return (

        <div onClick={onClose} className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div onClick={e => e.stopPropagation()} className="bg-black rounded-lg p-4 max-w-3xl w-full">

                <button onClick={onClose} className="mb-2" >
                    <X />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <aside className="md:col-span-1 order-2 md:order-1">
                        <h4 className="font-bold mb-2">Recomendados</h4>
                        <ul className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
                            {recomendados.map(rec => (
                                <li key={rec.id} onClick={() => onChangeVideo(rec)}>
                                    <VideoCard video={rec} />
                                </li>
                            ))}
                        </ul>

                    </aside>

                    <div className="md:col-span-2 order-1 md:order-2">
                        <iframe src={embed}
                            title={video.titulo}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full aspect-video"
                        ></iframe>

                        <h3 className="font-bold mt-2">{video.titulo}</h3>
                    </div>

                </div>
            </div>
        </div>
    );
}