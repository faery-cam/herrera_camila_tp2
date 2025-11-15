import MemberSelect from "./MemberSelect";
import MemberInfo from "./MemberInfo";
import MemberMedia from "./MemberMedia";

export default function Member({ activeMember, siguiente, anterior, seleccionarMember }) {

    return (
        <div className="">
            <MemberSelect activeMember={activeMember} siguiente={siguiente} anterior={anterior} seleccionarMember={seleccionarMember} />
            <MemberInfo activeMember={activeMember} />
            <MemberMedia activeMember={activeMember} />
        </div>
    )
}