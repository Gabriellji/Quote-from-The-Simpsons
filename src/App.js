import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import QuoteCard from './components/QuoteCard';
import Button from './components/Button';

function App() {
  let [ quotes, setQuotes ] = useState([]);
  let [ show , setBoolean] = useState([]);
  const endpoint = 'https://simpsons-quotes-api.herokuapp.com/quotes?count=3';


  useEffect(() => {
    axios.get(endpoint)
      .then(res => {
        setQuotes(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const getQuote = () => {
    axios.get(endpoint)
      .then(res => {
        setQuotes(res.data);
      })
      .catch(error => console.log(error));
  };

  const getQuoteFromSimpson = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=10')
      .then(res => {
        const result = res.data.filter(name => name.character.includes('Simpson'));
        setQuotes(result.slice(0, 3));
      })
      .catch(error => console.log(error));
  };

  const handlerClick = () => {
    setBoolean(!show);
    if(!show){
      getQuoteFromSimpson()
    }
  }
    

    return (
      <div className="App">
        <button className="btn_filter" type="button" 
        onClick={handlerClick}>Show Simpsons only : {show ? "OFF" : "ON"}</button>
        <div className="quote_wrap">
        {/* <FilterBtn
        show={true}
        
        /> */}
        {!show ? (quotes
        .filter(name => name.character.includes('Simpson'))
        .map((el, i) => (
          <QuoteCard
          key={i}
          image={el.image}
          quote={el.quote}
          character={el.character}
        />
        ))) : (
          quotes.map((el, i) => (
            <QuoteCard
            key={i}
            image={el.image}
            quote={el.quote}
            character={el.character}
          />
        )))}
        </div>
        <button className="btn" type="button" onClick={show ? getQuote : getQuoteFromSimpson}>Get Quote</button>
      </div>
    );
  }

export default App;
