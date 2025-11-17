import { getAsset } from "../utils/assets";

export default function Overlay({ opacity = 0.6 }) {
    return (
        <div
            className="fixed inset-0 pointer-events-none z-0 animate-pulse"
            style={{
                backgroundImage: `url(${getAsset('assets/img/dither.png')})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: opacity,
                animation: "pulse 3s ease-in-out infinite",
            }}
        />
    );
}