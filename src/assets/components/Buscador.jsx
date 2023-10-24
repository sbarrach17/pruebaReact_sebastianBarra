import React from "react";

const Buscador = ({ filtro, setFiltro }) => {
    const handleInputChange = (e) => {
        const value = e.target.value;
        setFiltro(value);
    };

    return (
        <aside>
            <label htmlFor="searchInput"></label>
            <input type="text" id="searchInput" placeholder="Buscar País" value={filtro} onChange={handleInputChange} />
        </aside>
    );
};

export default Buscador;
