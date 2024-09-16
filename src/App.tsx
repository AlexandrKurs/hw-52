import Card from './card';
import{useState} from 'react';
import CardDeck from './lib/CardDeck';
import GameCard from './lib/GameCard';
import PokerHand from './lib/PokerHand';

const App = () => {
    const [cards, setCards] = useState<GameCard[]>([]);

    const deal = () => {
        const deck = new CardDeck();
        const newCards = deck.getCards(5);
        setCards(newCards);
    };

    let outcome = '';
    if (cards.length > 0) {
        const hand = new PokerHand(cards);
        outcome = hand.getOutcome();
    }


    return (
        <>
            <div className="playingCards faceImages">
                {cards.map((card) => (
                    <Card key = {card.suit + '-' + card.rank} suit = {card.suit} rank = {card.rank} />
                ))}
            </div>
            <div>
                <button onClick={deal}>Deal</button>
                <p>
                    <strong>Outcome:</strong>{outcome}
                </p>
            </div>
        </>
    );
};

export default App;