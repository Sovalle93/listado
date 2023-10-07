import React from 'react';
import Table from 'react-bootstrap/Table';

const Listado = ({ listaColaborador }) => {
    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
                {listaColaborador.map((colaborador) => (
                    <tr key={colaborador.id}>
                        <td>{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                    </tr>
                    ))}
            </tbody>
        </Table>
    );
};

export default Listado;


