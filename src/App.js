import React from 'react';
import axios from 'axios';

import './App.css';
import QuoteCard from './components/QuoteCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ''
    };
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({ quote: data[0] })
      });
  }

  getQuote() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({ quote: data[0] })
      });
  }

  render() {
    console.log(this.state.quote)
    return (
      <div className="App">
        <QuoteCard
          image={this.state.quote.image}
          quote={this.state.quote.quote}
          character={this.state.quote.character}
        />
        <button className="btn" type="button" onClick={this.getQuote}>Get Quote</button>
      </div>
    );
  }
}

export default App;
