import React, { useState, useEffect } from "react";

const Api = ({ filtro }) => {
    const [paises, setPaises] = useState([]);

    const paisesFiltrados = paises.filter((paises) => paises.name.common.toLowerCase().includes(filtro.toLowerCase()));

    useEffect(() => {
        consultarApi();
    }, []);

    const consultarApi = async () => {
        const url = "https://restcountries.com/v3.1/all";
        const response = await fetch(url);
        const data = await response.json();
        setPaises(data);

        // METODO SORT PARA ORDENAR EL ARRAY POR ORDEN ALFABETICO ASCEDENTE
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        // SE UTILIZA REVERSE PARA QUE EL ORDEN SEA DESCENDENTE
        data.reverse();

        setPaises(data);
    };

    return (
        <main>
            <section className="gallery">
                {paisesFiltrados.map((pais) => (
                    <div className="card">
                        <img src={pais.flags.png} />
                        <div className="card-content">
                            <h3>{pais.name.common}</h3>
                            <h3>{pais.region}</h3>
                            <h4>{pais.capital}</h4>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Api;
