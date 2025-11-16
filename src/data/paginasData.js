import { House, UserPen, Film, PawPrint, Sparkles, ScrollText, UsersRound, Spotlight, Image as ImageIcon, } from "lucide-react";

const paginasData = [
    { to: '/', label: 'Home', icon: House, },
    {
        to: '/info', label: 'Sobre este sitio', icon: Sparkles,
        children: [
            { to: '/aboutdev', label: ' Sobre Dev Tsuki', icon: PawPrint, },
            { to: '/contacto', label: 'Contacto', icon: UserPen, },
        ],
    },
    {
        to: '/historia', label: 'Historia', icon: ScrollText,
        children: [{ to: '/miembros', label: 'Miembros', icon: UsersRound, }],
    },
    {
        to: '/galeria', label: 'Galeria', icon: ImageIcon,
        children: [{ to: '/videos', label: 'Videos', icon: Film, }],
    },
    { to: '/baile', label: 'Baile', icon: Spotlight, },
];

export default paginasData;