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

        <div onClick={onClose}>
            <div onClick={e => e.stopPropagation()}>

                <button onClick={onClose}>✕</button>

                <iframe src={embed}
                    title={video.titulo}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <h3>{video.titulo}</h3>

            </div>
        </div>

    );
}