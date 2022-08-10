const express = require('express');
const app = express();

app.use(express.json());
 

app.get('/', (req, res) => {
res.send('Welcome to REST API with Node.js !!');
});


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));