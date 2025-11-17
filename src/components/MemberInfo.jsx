export default function MemberInfo({ activeMember }) {
    return (
        <div className="md:w-2/4 px-4 py-6 flex flex-col gap-4">
            <h3 className="text-2xl font-bold tracking-tight">{activeMember.nombre}</h3>
            <p className="text-base text-black-200">{activeMember.bio}</p>
        </div>
    );
}