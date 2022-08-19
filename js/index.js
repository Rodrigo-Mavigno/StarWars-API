const personsCard = document.getElementById('persons');
const starshipsCard = document.getElementById('starships');
const planetsCard = document.getElementById('planets');

const btnPhrase = document.getElementById('btn-phrases');
const phrase = document.getElementById('phrase');

function fillCounters() {
  Promise.all([
    getData('people/'),
    getData('starships/'),
    getData('planets')
  ])
  .then(data => {
    personsCard.style.fontSize = '5em';
    starshipsCard.style.fontSize = '5em';
    planetsCard.style.fontSize = '5em';

    personsCard.innerHTML = data[0].count;
    starshipsCard.innerHTML = data[1].count;
    planetsCard.innerHTML = data[2].count;
  })
  .catch(err => console.log('Erro:', err))
};

fillCounters();

function getData(param) {
  return fetch(`http://swapi.dev/api/${param}`).then(res => res.json())
};

function loadPhrase() {
  return fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
        .then(data => data.json())
        .then(json => {
          btnPhrase.innerHTML = 'Ver mais uma frase!';
          phrase.innerHTML = `"${json.content}"`;

          phrase.animate([
            { transform: 'translateY(-70px)'},
            { transform: 'translateY(0px)'}
          ], {
            duration: 500
          })
        })
        .catch(err => console.log('Erro: ', err))
};