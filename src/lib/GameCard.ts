import {Rank, Suit} from '../types';

class GameCard {
    constructor(
        public rank: Rank,
        public suit: Suit
    ) {}
}

export default GameCard;