import weather from './assets/images/weather.PNG';
import bmi from './assets/images/bmi.PNG';
import calculator from './assets/images/calculator.PNG';
import movie from './assets/images/movie.jpg';
import lexikon from './assets/images/lexikon.PNG';
import krona from './assets/images/krona.PNG';
import notes from './assets/images/notes.PNG';
import blog from './assets/images/blog.PNG';

const projects = [
  {
    img: blog,
    name: 'Blog',
    desc:
      '<strong>Gatsby</strong> blog with <strong>contentful CMS</strong> as a backend.',
    link: 'https://reactforcats.netlify.com',
    code: 'https://github.com/AnanDaraghmeh/blog'
  },
  {
    img: notes,
    name: 'MY NOTES',
    desc:
      'CRUD app with <strong>react/redux</strong> and <strong>firebase</strong> (firestore and auth).',
    link: 'https://mynotes-d565a.firebaseapp.com',
    code: 'https://github.com/AnanDaraghmeh/MY-NOTES'
  },
  {
    img: weather,
    name: 'Weather cards',
    desc:
      '<strong>React/redux</strong> app, powered by <strong>openweathermap.org API.</strong>',
    link: 'https://weather-cards.netlify.com',
    code: 'https://github.com/AnanDaraghmeh/weather-cards'
  },
  {
    img: krona,
    name: 'Krona',
    desc: '<strong>React</strong> currency converter.',
    link: 'https://krona-currency-converter.netlify.com',
    code: 'https://github.com/AnanDaraghmeh/krona'
  },
  {
    img: movie,
    name: 'PoP MOViES',
    desc: 'A movie web app, powered by <strong>The Movie DB API.</strong>',
    link: 'https://pop-movies.netlify.com',
    code: 'https://github.com/AnanDaraghmeh/movie-app'
  },
  {
    img: lexikon,
    name: 'Lexikon',
    desc:
      'Swedish-Arabic dictionary, powered by <strong>Glosbe - the multilingual online dictionary.</strong>',
    link: 'https://lexikon.netlify.com',
    code: 'https://github.com/AnanDaraghmeh/lexikon'
  },
  {
    img: calculator,
    name: 'Calculator',
    desc: '<strong>React</strong> calculator.',
    link: 'https://simple-calculator-app.netlify.com',
    code: 'https://github.com/AnanDaraghmeh/calc-react'
  },
  {
    img: bmi,
    name: 'BMI Calculator',
    desc: '<strong>React</strong> BMI calculator.',
    link: 'https://react-bmi-calculator.netlify.com',
    code: 'https://github.com/AnanDaraghmeh/bmi-react'
  }
];

export { projects };
