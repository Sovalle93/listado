import React, { useState } from 'react';
import Buscador from './components/Buscador.jsx';
import Formulario from './components/Formulario.jsx';
import Alert from './components/Alert.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [colaboradores, setColaboradores] = useState([]); 

  const agregarColaborador = (nuevoColaborador) => {
    const updatedColaboradores = [...colaboradores];
    const newColaborador = {
      id: Date.now().toString(), 
      ...nuevoColaborador,
    }; 
    updatedColaboradores.push(newColaborador);
    setColaboradores(updatedColaboradores);
  };
  

  return (
    <>
    <main>
        <Buscador
          listaColaborador={colaboradores}
        />
        <Formulario
          setErrorMessage={setErrorMessage}
          setSuccessMessage={setSuccessMessage}
          agregarColaborador={agregarColaborador}
        />
    </main>
    <section className='alert'>
        {errorMessage && <Alert message={errorMessage} type="danger" />}
        {successMessage && <Alert message={successMessage} type="success" />}
    </section>

    </>
  );
};

export default App;

