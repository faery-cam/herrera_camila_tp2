import { Link } from "react-router-dom";

export default function Home() {
  return (

    <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/img/antsa.webp')" }}>
      <div>
        overlay placeholder

        <p>¿Es tu primera vez acá? Hacé click <Link to="/info">aquí</Link> para una guía!</p>
      </div>
    </div>

  )

}