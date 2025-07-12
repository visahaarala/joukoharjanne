import { Request, Response } from 'express';
import express from 'express';
import { translations, languages, suffixes } from './translations';

// const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, './views'));
// app.set('views', express.static(__dirname + '/views'));

// home
app.get('/:lang', (req: Request, res: Response) => {
  const lang = req.params.lang;
  // if (!translations[lang]) return res.redirect('/en');
  res.render('index', {
    languages,
    lang,
    translation: translations[lang],
    pageName: '',
  });
});

app.get('/:lang/:suffix', (req: Request, res: Response) => {
  const { lang, suffix } = req.params;
  // check sub
  const pageName = suffixes.includes(suffix) ? suffix : suffixes[0];
  if (!translations[lang]) return res.redirect('/en/' + pageName);
  res.render(pageName, {
    languages,
    lang,
    translation: translations[lang],
    pageName,
  });
});

// // about
// app.get('/:lang/about', (req: Request, res: Response) => {
//   const lang = req.params.lang;
//   if (!translations[lang]) return res.redirect('/en/about');
//   res.render('about', {
//     lang,
//     title: translations[lang].about,
//     translations,
//     url_suffix: '/about',
//   });
// });

// redirect root to english
app.get('/', (req: Request, res: Response) => res.redirect('/en'));

// 404 simple handler
app.use((req: Request, res: Response) =>
  res.status(404).send('joukoharjanne.com --- 404 not found')
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
