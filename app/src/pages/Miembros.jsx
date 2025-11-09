import { useState } from "react";
import useMember from "../hooks/useMember.js";
import MiembrosIntro from "../components/MiembrosIntro.jsx";
import Member from "../components/Member.jsx";

export default function Miembros() {
    const [introVisible, setIntroVisible] = useState(true);
    const { activeMember, siguiente, anterior, seleccionarMember } = useMember();

    const handleSelccionar = (id) => {
        seleccionarMember(id);
        setIntroVisible(false);
    }

    return (
        <div className="">
            {introVisible ? (
                <MiembrosIntro onSelect={handleSelccionar} />
            ) : (
                <Member
                    activeMember={activeMember}
                    siguiente={siguiente}
                    anterior={anterior}
                    seleccionarMember={seleccionarMember}
                />
            )}
        </div>
    );
}