import { House, UserPen, Film, PawPrint, Sparkles, ScrollText, UsersRound, Spotlight, Image as ImageIcon, } from "lucide-react";

const paginas = [
    { to: '/', label: 'Home', Icon: House, },
    {
        to: '/info', label: 'Sobre este sitio', Icon: Sparkles,
        children: [
            { to: '/aboutdev', label: ' Sobre Dev Tsuki', Icon: PawPrint, },
            { to: '/contacto', label: 'Contacto', Icon: UserPen, },
        ],
    },
    {
        to: '/historia', label: 'Historia', Icon: ScrollText,
        children: [{ to: '/miembros', label: 'Miembros', Icon: UsersRound, }],
    },
    {
        to: '/galeria', label: 'Galeria', Icon: ImageIcon,
        children: [{ to: '/videos', label: 'Videos', Icon: Film, }],
    },
    { to: '/baile', label: 'Baile', Icon: Spotlight, },
]

export default paginasData;