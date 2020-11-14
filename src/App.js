import React from 'react';
import axios from 'axios';

import './App.css';
import QuoteCard from './components/QuoteCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: '' };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.data)
    .then(data => {
      console.log(data[0])
      this.setState({ quote: data[0]})
    })

  }
  render() {
    return (
      <div className="App">
        <QuoteCard 
        image={this.state.quote.image}
        quote={this.state.quote.quote}
        character={this.state.quote.character}
        />
        <button type="button" onClick={this.getQuote}>Get Quote</button>
      </div>
    );
  }  
}

export default App;
