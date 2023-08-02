import React, { useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  useEffect(() => {
    // Para llamar a la función de imprimir hola mundo
    axios.get('/hola-mundo')
      .then(response => {
        console.log(response.data.message); // Debería imprimir "Hola Mundo impreso en consola" en la consola del navegador.
      })
      .catch(error => {
        console.error(error);
      });

    // Para llamar a la función de suma
    axios.get('/suma')
      .then(response => {
        console.log(response.data.resultado); // Debería imprimir 4 en la consola del navegador si a=2 y b=2.
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {/* Contenido de tu componente o página */}
    </div>
  );
};

export default MyComponent;
