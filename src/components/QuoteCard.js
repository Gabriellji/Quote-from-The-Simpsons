import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ image, character, quote }) => (
    <figure className="QuoteCard">
        <img src={image} alt={character} />
        <figcaption>
            <blockquote>{quote}</blockquote>
            <p>
                <cite>{character}</cite>
                <span>&#9733;</span>
            </p>
        </figcaption>
    </figure>
);

export default QuoteCard;