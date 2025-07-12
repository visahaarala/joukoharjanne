import { Request, Response } from 'express';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

const translations = require('./translations');

// home
app.get('/:lang', (req: Request, res: Response) => {
  const lang = req.params.lang;
  if (!translations[lang]) return res.redirect('/en');
  res.render('index', {
    lang,
    title: translations[lang].home,
    translations,
    url_suffix: '',
  });
});

// about
app.get('/:lang/about', (req: Request, res: Response) => {
  const lang = req.params.lang;
  if (!translations[lang]) return res.redirect('/en/about');
  res.render('about', {
    lang,
    title: translations[lang].about,
    translations,
    url_suffix: '/about',
  });
});

// redirect root to english
app.get('/', (req: Request, res: Response) => res.redirect('/en'));

// 404 simple handler
app.use((req: Request, res: Response) =>
  res.status(404).send('joukoharjanne.com --- 404 not found')
);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
