import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import QuoteCard from './components/QuoteCard';

function App() {

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=3')
      .then(res => {
        setQuotes(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const getQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=3')
      .then(res => {
        setQuotes(res.data);
      })
      .catch(error => console.log(error));
  };

    return (
      <div className="App">
        {quotes.map((el, i) => (
          <QuoteCard
          key={i}
          image={el.image}
          quote={el.quote}
          character={el.character}
        />
        ))}
        <button className="btn" type="button" onClick={getQuote}>Get Quote</button>
      </div>
    );
  }

export default App;
