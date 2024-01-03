// backend/app.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());




app.get('/api/data', (req, res) => {

    try{
        const data = { message: '¡Hola desde el servidor Express lado backend! op' };
 
        res.json(data);
        

    }catch (error) {
        res.status(500).json({ message: 'Error al obtener tareas del lado backend' });
      }
  
});










app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});