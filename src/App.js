import React from 'react';
import axios from 'axios';

import './App.css';
import QuoteCard from './components/QuoteCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {
        quote: "Shut up, brain. I got friends now. I don't need you anymore.",
        character: "Lisa Simpson",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
        characterDirection: "Right"
      }
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({ quote: data[0] })
      });

  };
  
  render() {
    return (
      <div className="App">
        <QuoteCard
          image={this.state.quote.image}
          quote={this.state.quote.quote}
          character={this.state.quote.character}
        />
        <button  className="btn" type="button" onClick={this.getQuote}>Get Quote</button>
      </div>
    );
  }
}

export default App;
