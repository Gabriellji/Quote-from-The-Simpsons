import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import LoadingSpinner from './components/LoadingSpinner';
import QuoteCard from './components/QuoteCard';

function App() {

  let [quotes, setQuotes, loading = [false]] = useState([]);

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
        loading.push(false);
      })
      .catch(error => console.log(error));
      loading.shift();
  };

    return (
      <div className="App">
        <div className="quote_wrap">
        { !loading.includes(false) ? <LoadingSpinner /> : quotes.map((el, i) => (
          <QuoteCard
          key={i}
          image={el.image}
          quote={el.quote}
          character={el.character}
        />
        ))}
        </div>
        <button className="btn" type="button" onClick={getQuote}>Get Quote</button>
      </div>
    );
  }

export default App;
