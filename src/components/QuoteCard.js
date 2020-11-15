import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ image, character, quote }) => (
    <figure className="QuoteCard">
        <img className="animationed" src={image} alt={character} />
        <figcaption className="animationed">
            <blockquote className="animationed">{quote}</blockquote>
            <p>
                <cite className="animationed">{character}</cite>
                <span>&#9733;</span>
            </p>
        </figcaption>
    </figure>
);

export default QuoteCard;