const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const biography = require('./biography');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

// styles.css
app.use(express.static(path.join(__dirname, 'public')));

// finnish
app.get('/', (req, res) => {
  res.render('index', {
    lang: 'fi',
    biography,
  });
});

// other languages
app.get('/:lang', (req, res) => {
  const lang = req.params.lang;
  if (!biography[lang]) return res.redirect('/');
  res.render('index', {
    lang,
    biography,
  });
});

// redirect everything else to finnish
app.use((req, res) => res.redirect('/'));

app.listen(PORT, console.log(`Server running on port ${PORT}`));
