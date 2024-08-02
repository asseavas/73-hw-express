const Vigenere = require('caesar-salad').Vigenere;
const express = require('express');

const app = express();
const port = 8000;
const password = 'hello';

app.get('/', (req, res) => {
    return res.send('<h1>Homepage!</h1>');
});

app.get('/:word', (req, res) => {
    return res.send(`<h1>${req.params.word}</h1>`);
});

app.get('/encode/:text', (req, res) => {
  const encodedText = Vigenere.Cipher(password).crypt(req.params.text);
  return res.send(`<h1>${encodedText}</h1>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})