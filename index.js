const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send('<h1>Homepage!</h1>');
});

app.get('/:word', (req, res) => {
    return res.send(`<h1>${req.params.word}</h1>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})