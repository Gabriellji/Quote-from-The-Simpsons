import React from 'react';
import axios from 'axios';

import './App.css';
import QuoteCard from './components/QuoteCard';
import LoadingSpinner from './components/LoadingSpinner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      loading: false,
    };
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  };

  getQuote() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => {
        this.setState({ loading: false })
        return response.data
      })
      .then(data => {
        this.setState({ quote: data[0] })
      });
    this.setState({ loading: true })
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        <div className="quote_wrap">
          {loading || !this.state.quote ? (
            <LoadingSpinner />
          ) : (
              <QuoteCard
                image={this.state.quote.image}
                quote={this.state.quote.quote}
                character={this.state.quote.character}
              />)}
        </div>
        <button className="btn" type="button" onClick={this.getQuote}>Get Quote</button>
      </div>
    );
  }
}

export default App;
