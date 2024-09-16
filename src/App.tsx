import Card from './card';
import {Rank, Suit} from './types';

const App = () => (
    <div className="playingCards faceImages">
        <Card suit={Suit.DIAMS} rank={Rank.A}/>
        <Card suit={Suit.HEARTS} rank={Rank.J}/>
        <Card suit={Suit.CLUBS} rank={Rank.R10}/>
        <Card suit={Suit.SPADES} rank={Rank.R5}/>
    </div>
);

export default App;