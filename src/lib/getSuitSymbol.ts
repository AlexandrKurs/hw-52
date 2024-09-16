import {Suit} from '../types';

const getSuitSymbol = (suit: Suit) => {
    switch (suit) {
        case Suit.DIAMS:
            return '♦';
        case Suit.HEARTS:
            return '♥';
        case Suit.CLUBS:
            return '♣';
        case Suit.SPADES:
            return '♠';
        default:
            throw new Error (`Unsupported suit: ${suit}`);
    }
};

export default getSuitSymbol;