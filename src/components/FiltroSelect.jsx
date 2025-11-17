export default function FiltroSelect({ opciones, filtros, modo, setModo, toggleFiltro, cleanFiltros }) {
    return (
        <aside className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
                <span className="font-semibold">Combinación:</span>

                <button onClick={() => setModo(modo === "OR" ? "AND" : "OR")}
                    className={`
                        px-3 py-1 rounded-md border 
                        transition-all duration-200 ${modo === "OR"
                            ? "bg-gray-100 border-gray-300 text-gray-700"
                            : "bg-blue-300 border-blue-400 text-blue-900"}`}
                >
                    {modo === "OR" ? "Cualquiera" : "Exactamente esos"}
                </button>

            </div>

            {Object.entries(opciones).map(([categoria, valores]) =>

                <div key={categoria} className="mb-2">
                    <h3 className="font-medium mb-2">{categoria}</h3>

                    <div className="flex flex-wrap gap-2 md:flex-col">
                        {valores.map(valor => (
                            <label key={valor} className="flex items-center gap-1 px-2 py-1 border rounded-md">

                                <input type="checkbox"
                                    checked={filtros[categoria]?.includes(valor) || false}
                                    onChange={() => toggleFiltro(categoria, valor)} />
                                {valor}
                            </label>
                        ))}
                    </div>
                </div>
            )}

            <div className="pt-1">
                <button onClick={cleanFiltros} className="text-red-500">Limpiar Filtros</button>
            </div>
        </aside>
    )
}