export default function VideoCard({ video }){

    const id = new URL(video.src).searchParams.get("v");
    const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

    return (
        <div>
            <img src={thumbnail} alt={video.titulo} className="" />
            <p>{video.titulo}</p>
        </div>
    );
}