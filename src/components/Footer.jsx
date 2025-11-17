import { Link } from "react-router-dom"
import { GithubIcon, Instagram } from "lucide-react"

export default function Footer() {
    return (
        <footer className="w-full bg-pink-500 text-black-200 mt-12 py-6 px-4 z-10">

            <div className=" max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
                <div className="flex flex-col gap-3">
                    <p className="">Made with love by Tsuki.</p>

                    <div className="flex gap-3">
                        <a href="https://github.com/faery-cam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                            <GithubIcon />
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.instagram.com/faerytsuuki/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-color">
                            <Instagram />
                            <span>Instagram</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-right md:text-right">
                    <Link to="contacto" className="hover:text-white transition-colors" >Contacto</Link>
                    <Link to="info" className="hover:text-white transition-colors">Sobre el Dev</Link>
                </div>
            </div>
            <p className="text-center text-sm mt-6">©2025. All rights Reserved</p>
        </footer>
    );
}