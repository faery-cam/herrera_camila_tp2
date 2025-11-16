import { useEffect } from "react"

export default function Baile() {

useEffect(() => {
  document.title = "Baile";
}, []);

    return (
        <>
            <section className="p-6">
                <h2 className="text-2xl font-bold">About Dev</h2>
            </section>
        </>
    )

}