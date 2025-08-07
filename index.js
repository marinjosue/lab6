const express = require('express');
const app = express();
const port = process.env.PORT

//endopoint que responde un mensaje

app.get('/', (req, res) => {
    res.send('Integracion continua con GitHub Actions');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
