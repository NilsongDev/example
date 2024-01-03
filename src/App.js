import NuevoNav from './view/nuevoNav';
import './App.css';
import NuevoNavDos from './view/nuevoNavDos';



import NavbarTres from './view/nuevoNavTres';
import { BrowserRouter as Router } from 'react-router-dom';




import React, { useState, useEffect } from 'react';




const App = () =>  {

  const [message, setMessage] = useState();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        
        if (!response.ok) {
          throw new Error(`Respuesta no exitosa: ${response.status}`);
        }
        const jsonData = await response.json();
       
        setMessage(jsonData.message);

      } catch (error) {

        console.error('Error al obtener datos desde el servidor ese es del lado frontend:', error);
        setMessage('Error al obtener tareas lado frontend');
      }
    };

    fetchData();
  }, []);





  return (
    <div className="App">
      <header className="App-header">


        < NuevoNav />

        <NuevoNavDos />
        
      <h1>Comunicación entre Backend y Frontend 01 </h1>
     
    



      </header>
    
      <h1>Comunicación entre Backend y Frontend02 </h1>

      <div>
      <div>
      <h1>Respuesta del Servidorr:</h1>
      {message ? (
        <p>{message}</p>
      ) : (
        <p>Cargando datos...</p>
      )}

      <p>mensaje nuevo prueba :: {message }</p>
     
    </div>
     
    
      </div>


    </div>

  );
}

export default App;
