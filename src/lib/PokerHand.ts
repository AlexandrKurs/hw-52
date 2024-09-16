import GameCard from './GameCard';

interface FreqMap {
    [key: string]: number;
}

class PokerHand {
    constructor(private cards: GameCard[]) {}

    getOutcome() {
        const map = this.cards.reduce<FreqMap>((acc, card) => {
            if (acc[card.rank]) {
                acc[card.rank] ++;
            } else {
                acc[card.rank] = 1;
            }
            return acc;
        },{});

        const repeats = Object.values(map);

        let pairs = 0;
        let threes = 0;
        let fours = 0;

        for (const repeat of repeats) {
            if (repeat === 2) {
                pairs++;
            }
            if (repeat === 3) {
                threes++;
            }
            if (repeat === 4) {
                fours++;
            }
        }

        const firstSuit = this.cards[0].suit;
        const isFlush = this.cards.every((card) => card.suit === firstSuit);

        if (fours > 0) {
            return 'Four of a kind!';
        } else if (threes >0 && pairs > 0) {
            return 'Full house!';
        } else if (isFlush) {
            return 'Flush!';
        } else if (threes > 0) {
            return 'Tree of a kind!';
        } else if (pairs === 2) {
            return 'Two pairs!';
        } else if (pairs === 1) {
            return 'One pair!';
        }

        return 'High card!';
    }
}

export default PokerHand;