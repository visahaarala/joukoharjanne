const express = require('express');
const app = express();
const PORT = 3000;

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    welcome: 'Welcome to the site!',
    intro: 'This is a simple multilingual site example.',
    about_msg: 'We are an example website.',
  },
  fi: {
    home: 'Etusivu',
    about: 'Tietoa',
    welcome: 'Tervetuloa sivustolle!',
    intro: 'Tämä on yksinkertainen monikielinen sivusto.',
    about_msg: 'Olemme esimerkkisivusto.',
  },
  jp: {
    home: 'ホーム',
    about: '紹介',
    welcome: 'サイトへようこそ！',
    intro: 'これは簡単な多言語サイトの例です。',
    about_msg: '私たちは例のウェブサイトです。',
  },
};

app.set('view engine', 'pug');
app.set('views', './views');

// // home
// app.get('/:lang', (req, res) => {
//   const lang = req.params.lang;
//   if (!translations[lang]) return res.redirect('/en');
//   res.render('index', {
//     lang,
//     title: translations[lang].home,
//     translations,
//     url_suffix: '',
//   });
// });

// // about
// app.get('/:lang/about', (req, res) => {
//   const lang = req.params.lang;
//   if (!translations[lang]) return res.redirect('/en/about');
//   res.render('about', {
//     lang,
//     title: translations[lang].about,
//     translations,
//     url_suffix: '/about',
//   });
// });

// // redirect root to english
// app.get('/', (req, res) => res.redirect('/en'));

app.get('/', (req, res) => res.send('joukoharjanne.com website'));

// 404 simple handler
app.use((req, res) => res.status(404).send('joukoharjanne.com --- 404 not found'));

app.listen(PORT, console.log(`Server running on port ${PORT}`));
