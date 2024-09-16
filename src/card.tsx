import React from 'react';
import {Suit, Rank} from './types';
import getSuitSymbol from "./lib/getSuitSymbol.ts";

interface Props {
    rank: Rank;
    suit: Suit;
}

const Card: React.FC<Props> = ({rank, suit}) => {
    const suitSymbol = getSuitSymbol(suit);
    const classes = `card rank-${rank.toLowerCase()} ${suit}`;

    return (
        <span className={classes}>
          <span className="rank">{rank}</span>
          <span className="suit">{suitSymbol}</span>
       </span>
    );
};

export default Card;