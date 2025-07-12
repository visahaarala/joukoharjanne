type Content = {
  title: string;
  heading: string;
  paragraphs: string[];
};

type Translation = {
  home: Content;
  about: Content;
};

export const languages = ['en', 'fi'];

export const suffixes = ['home', 'about']

export const translations: { [lang: string]: Translation } = {
  en: {
    home: {
      title: 'home',
      heading: 'homeheading',
      paragraphs: ['homeLorem1', 'homeLorem2'],
    },
    about: {
      title: 'about',
      heading: 'aboutHeading',
      paragraphs: ['aboutLorem1', 'aboutLorem2'],
    },
  },
  fi: {
    home: {
      title: 'koti',
      heading: 'kotiheading',
      paragraphs: ['kotiLorem1', 'kotiLorem2'],
    },
    about: {
      title: 'tietoja',
      heading: 'tietojaHeading',
      paragraphs: ['tietojaLorem1', 'tietojaLorem2'],
    },
  },
};

// const translations: Translations = {
//   en: {
//     home: 'Home',
//     about: 'About',
//     welcome: 'Welcome to the site!',
//     intro: 'This is a simple multilingual site example.',
//     about_msg: 'We are an example website.',
//   },
//   fi: {
//     home: 'Etusivu',
//     about: 'Tietoa',
//     welcome: 'Tervetuloa sivustolle!',
//     intro: 'Tämä on yksinkertainen monikielinen sivusto.',
//     about_msg: 'Olemme esimerkkisivusto.',
//   },
//   jp: {
//     home: 'ホーム',
//     about: '紹介',
//     welcome: 'サイトへようこそ！',
//     intro: 'これは簡単な多言語サイトの例です。',
//     about_msg: '私たちは例のウェブサイトです。',
//   },
// };
