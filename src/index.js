import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/stylesheet.css';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="quote-box">
          <div class="quote-text">
            <i class="fa fa-quote-left"> </i><span id="text"></span>
          </div>
          <div class="quote-author">
            - <span id="author"></span>
          </div>
          <div class="buttons">
            <a class="button" id="tweet-quote" title="Tweet this quote" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <button class="button" id="new-quote">New quote</button>
          </div>
        </div>
        <footer>
          Made by <a href=" https://github.com/joldie/ " target="_blank ">joldie</a> as a project for the <a href="https://learn.freecodecamp.org/ " target="_blank ">freeCodeCamp</a> Front End Libraries course
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
