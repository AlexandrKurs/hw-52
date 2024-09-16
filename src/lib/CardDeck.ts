import GameCard from './GameCard';
import {Suit, Rank} from '../types';

class CardDeck {
    private cards: GameCard[] = [];
    constructor() {
        Object.values(Suit).forEach((suit) => {
            Object.values(Rank).forEach((rank) => {
                const card:GameCard = new GameCard(rank, suit);
                this.cards.push(card);
            });
        })
    }
    getCard() {
       const randomIndex = Math.floor(Math.random() * this.cards.length);
       const [result] = this.cards.splice(randomIndex, 1);

       return result;
    }

    getCards(howMany: number) {
        const resultingCards: GameCard[] = [];

        for (let i = 0; i < howMany; i++) {
            const card = this.getCard();
            resultingCards.push(card);
        }
        return resultingCards;
    }
}

export default CardDeck;