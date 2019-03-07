import weather from './images/weather.PNG';
import bmi from './images/bmi.PNG';
import calculator from './images/calculator.PNG';
import movie from './images/movie.PNG';
import lexikon from './images/lexikon.PNG';
import krona from './images/krona.PNG';
import notes from './images/notes.PNG';
import blog from './images/blog.PNG';
const projects = [
  {
    img: blog,
    name: 'My Personal Blog',
    desc: 'Build with Gatsby.',
    link: 'https://anandaraghmeh-blog.netlify.com',
    code: 'https://github.com/AnanDaraghmeh/blog'
  },
  {
    img: notes,
    name: 'MY NOTES',
    desc: 'Demo CRUD app with react/redux and firebase(firestore and auth).',
    link: 'https://mynotes-d565a.firebaseapp.com',
    code: 'https://github.com/AnanDaraghmeh/MY-NOTES'
  },
  {
    img: krona,
    name: 'Krona',
    desc: 'Currency Converter react app',
    link: 'https://krona-currency-converter.netlify.com',
    code: 'https://github.com/AnanDaraghmeh/krona'
  },
  {
    img: movie,
    name: 'PoP MOViES',
    desc: 'A movie web app powered by The Movie DB API.',
    link: 'https://pop-movies.netlify.com',
    code: 'https://github.com/AnanDaraghmeh/movie-app'
  },
  {
    img: lexikon,
    name: 'Lexikon',
    desc:
      'A Swedish-Arabic dictionary, powered by Glosbe - the multilingual online dictionary.',
    link: 'https://lexikon.netlify.com',
    code: 'https://github.com/AnanDaraghmeh/lexikon'
  },
  {
    img: weather,
    name: 'Weather App',
    desc: 'A weather demo app powered by openweathermap.org API.',
    link: 'https://demo-weather-app.netlify.com',
    code: 'https://github.com/AnanDaraghmeh/weatherApp'
  },
  {
    img: calculator,
    name: 'Calculator',
    desc: 'Simple React Calculator.',
    link: 'https://simple-calculator-app.netlify.com',
    code: 'https://github.com/AnanDaraghmeh/calc-react'
  },
  {
    img: bmi,
    name: 'BMI calculator',
    desc: 'A simple BMI calculator.',
    link: 'https://simple-bmi-calculator.netlify.com',
    code: 'https://github.com/AnanDaraghmeh/bmiCalculator'
  }
];

export { projects };
