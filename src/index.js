import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/stylesheet.css';
import registerServiceWorker from './registerServiceWorker';

let quotesData;
let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Click the button, get a better quote",
      author: "joldie",
      color: '#009688'
    }
    this.displayNewQoute = this.displayNewQuote.bind(this);
  }
  displayNewQuote() {
    getQuote();
  }
  componentWillMount() {
    getListQuotes();
  }
  render() {

    let bgColorStyle = {
      backgroundColor: this.state.color
    };

    return (
      <div id="wrapper">
        <div id="quote-box">
          <div className="quote-text">
            <i className="fa fa-quote-left"> </i><span id="text">{this.state.quote}</span>
          </div>
          <div className="quote-author">
            - <span id="author">{this.state.author}</span>
          </div>
          <div className="buttons">
            <a className="button" id="tweet-quote" title="Tweet this quote" target="_blank" style={bgColorStyle}>
              <i className="fab fa-twitter"></i>
            </a>
            <button className="button" id="new-quote" onClick={this.displayNewQoute} style={bgColorStyle}>New quote</button>
          </div>
        </div>
        <footer>
          Made by <a href=" https://github.com/joldie/ " target="_blank ">joldie</a> as a project for the <a href="https://learn.freecodecamp.org/ " target="_blank ">freeCodeCamp</a> Front End Libraries course
        </footer>
      </div>
    );
  }
}

let app = ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function getListQuotes() {
  return fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', {
    method: 'get',
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      response.json().then(json => {
        quotesData = json;
      });
    }
  })
}

function getRandomQuote() {
  return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
}

function getQuote() {
  // Get a new random quote
  let randomQuote = getRandomQuote();
  let currentQuote = randomQuote.quote;
  let currentAuthor = randomQuote.author;

  // Change text on page
  app.setState({
    quote: currentQuote,
    author: currentAuthor
  });
  document.getElementById('tweet-quote')
    .setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));

  // Change color
  let color = Math.floor(Math.random() * colors.length);
  app.setState({
    color: colors[color]
  });
  document.body.style.backgroundColor = colors[color];
  document.body.style.color = colors[color];

}