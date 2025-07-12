const express = require('express');
const app = express();
const PORT = 3000;

const biography = require('./biography');

app.set('view engine', 'pug');
app.set('views', './views');

// home
app.get('/:lang', (req, res) => {
  const lang = req.params.lang;
  if (!biography[lang]) return res.redirect('/en');
  res.render('index', {
    lang,
    biography,
  });
});

// redirect root to english
app.get('/', (req, res) => res.redirect('/en'));

// 404 simple handler
app.use((req, res) => res.status(404).send('Not found'));

app.listen(PORT, console.log(`Server running on port ${PORT}`));
