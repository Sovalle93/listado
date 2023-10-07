import React, { useState } from 'react';
import { BaseColaboradores } from "./BaseColaboradores.js";
import Listado from "./Listado.jsx"; 

const Buscador = ({ listaColaborador }) => {
    const [buscarColaborador, setBuscarColaborador] = useState("");

    const handleSearchInput = (e) => {
        setBuscarColaborador(e.target.value);
    };
    const combinedColaboradores = [...BaseColaboradores, ...listaColaborador];
    const filteredColaboradores = combinedColaboradores.filter((colaborador) =>
        colaborador.nombre.toLowerCase().includes(buscarColaborador.toLowerCase())
    );

    return (
        <>
            <section className='filter'>
                <h1>Lista de Colaboradores</h1>
                <input
                    name="colaborador"
                    className='search'
                    placeholder="Busca un colaborador"
                    value={buscarColaborador}
                    onChange={handleSearchInput}
                />
                <Listado listaColaborador={filteredColaboradores} />
            </section>
        </>
    );
};

export default Buscador;
