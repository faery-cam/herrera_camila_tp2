import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAsset } from "../utils/assets";

export default function Home() {

  useEffect(() => {
    document.title = "Información";
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="fixed inset-0 bg-cover bg-no-repeat -z-10 bg-position-[center_20%] pointer-events-none" style={{ backgroundImage: `url(${getAsset('assets/img/antsa.webp')})` }} />

        <div> 
          <div className="relative flex flex-col items-center justify-center h-full text-center text-neutral-100 mt-[20vh] pointer-events-auto bg-black/30 p-4 rounded-lg max-w-sm mx-auto">


            <p className="text-xl mb-2">¿Es tu primera vez acá? </p>
            <p className="text-lg"> Hacé click <Link to="/info" className="underline underline-offset-4 hover:text-pink-300 transition">aquí</Link>{" "} para una guía!</p>
          </div>
        </div>
      </div>
  )
}