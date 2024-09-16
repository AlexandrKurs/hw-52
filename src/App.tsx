import Card from './card';
import{useState} from 'react';
import CardDeck from './lib/CardDeck';
import GameCard from './lib/GameCard';

const App = () => {
    const [cards, setCards] = useState<GameCard[]>([]);

    const deal = () => {
        const deck = new CardDeck();
        const newCards = deck.getCards(5);
        setCards(newCards);
    };

    return (
        <>
            <div className="playingCards faceImages">
                {cards.map((card) => (
                    <Card key = {card.suit + '-' + card.rank} suit = {card.suit} rank = {card.rank} />
                ))}
            </div>
            <div>
                <button onClick={deal}>Deal</button>
            </div>
        </>
    );
};

export default App;