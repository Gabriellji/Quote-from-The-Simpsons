import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import QuoteCard from './components/QuoteCard';
// import FilterBtn from './components/FilterBtn';

function App() {

  let [ quotes, setQuotes ] = useState([]);
  let [ show , setBool] = useState([]);

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

  const handlerClick = () => {setBool(!show)}
    

    return (
      <div className="App">
        <button className="btn_filter" type="button" 
        onClick={handlerClick}>Show Simpsons only : {show ? "ON" : "OFF"}</button>
        <div className="quote_wrap">
        {/* <FilterBtn
        show={true}
        
        /> */}
        {show ? (quotes
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
        <button className="btn" type="button" onClick={getQuote}>Get Quote</button>
      </div>
    );
  }

export default App;
