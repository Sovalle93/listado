import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({ setErrorMessage, setSuccessMessage, agregarColaborador }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');

    const validarDatos = (e) => {
        e.preventDefault();
        if (nombre === '' || email === '' || edad === '' || cargo === '' || telefono === '') {
            setErrorMessage('Completa todos los campos!');
            setSuccessMessage('');
        } else {
            setErrorMessage('');
            setSuccessMessage('Colaborador Agregado!');
            agregarColaborador({
                nombre,
                correo: email,
                edad,
                cargo,
                telefono,
            });
            setNombre('');
            setEmail('');
            setEdad('');
            setCargo('');
            setTelefono('');
        }
    };

return (
    <>
        <Form className="formulario" onSubmit={validarDatos}>
            <h1>Agregar Colaborador</h1>
            <div className="form-group">
                <input
                    type="text"
                    name="nombre"
                    placeholder='Nombre del colaborador'
                    className="form-control"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    placeholder='Email del Colaborador'
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className="form-group">
                <input
                    type="text" 
                    name="edad"
                    placeholder='Edad del Colaborador'
                    className="form-control"
                    onChange={(e) => setEdad(e.target.value)}
                    value={edad}
                />
            </div>
            <div className="form-group">
                <input
                    type="text" 
                    name="cargo"
                    placeholder='Cargo del Colaborador'
                    className="form-control"
                    onChange={(e) => setCargo(e.target.value)}
                    value={cargo}
                />
            </div>
            <div className="form-group">
                <input
                    type="text" 
                    name="telefono"
                    placeholder='Teléfono del Colaborador'
                    className="form-control"
                    onChange={(e) => setTelefono(e.target.value)}
                    value={telefono}
                />
            </div>
            <Button type="submit" className="btn">
                Agregar Colaborador
            </Button>
        </Form>
    </>
    );
};

export default Formulario;
