import { Link } from "react-router-dom"
import { GithubIcon, Instagram } from "lucide-react"

export default function Footer() {
    return (
        <footer>
            <div>
                <a href="https://github.com/faery-cam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 w-fit">
                    <GithubIcon/>
                    <span>GitHub</span>
                </a>
                <a href="https://www.instagram.com/faerytsuuki/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 w-fit">
                    <Instagram/>
                    <span>Instagram</span>
                </a>
            </div>
            <div>
                <p>Made with love by Tsuki.</p>
                <p>agregar socialmedia</p>
            </div>

            <div>
                <Link to="contacto">Contacto</Link>
                <Link to="info">Sobre el Dev</Link>
            </div>

            <p>©2025. All rights Reserved</p>
        </footer>
    )
}