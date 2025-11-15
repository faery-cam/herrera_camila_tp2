export default function FiltroSelect({ opciones, filtros, modo, setModo, toggleFiltro, cleanFiltros }) {
    return (
        <aside>
            <div>
                <span>combinación</span>
                <button onClick={() => setModo(modo === "OR" ? "AND" : "OR")}>
                    {modo === "OR" ? "Cualquiera" : "Exactamente esos"}
                </button>

            </div>

            {Object.entries(opciones).map(([categoria, valores]) =>
                <div key={categoria}>
                    <h3>{categoria}</h3>

                    {valores.map(valor => (
                        <label key={valor}>
                            <input type="checkbox"
                                checked={filtros[categoria]?.includes(valor) || false}
                                onChange={() => toggleFiltro(categoria, valor)} />
                            {valor}
                        </label>
                    ))}
                </div>
            )}

            <button onClick={cleanFiltros}>Limpiar Filtros</button>

        </aside>
    )
}