import { useCallback, useEffect } from "react"

export default function VideoModal({ video, onClose }) {

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

    return (

        <div onClick={onClose} className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div onClick={e => e.stopPropagation()} className="bg-black rounded-lg p-4 max-w-3xl w-full">

                <button onClick={onClose}>✕</button>

                <iframe src={embed}
                    title={video.titulo}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video"
                ></iframe>

                <h3>{video.titulo}</h3>

            </div>
        </div>

    );
}