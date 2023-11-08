import React, { useState } from 'react';
import './CardViewer.css';

class CardViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            frontview: true,
        };
    }

    nextCard = () => {
        //if there's still cards to go next to, set the current index to the next one
        //make sure the front view is shown first
        if (this.state.currentIndex < this.props.cards.length - 1) {
            this.setState((prevCard) => ({
                currentIndex: prevCard.currentIndex + 1,
                fronview: true
            }));
        }
    };

    prevCard = () => {
        //if we're not at the first index (there's still a previous card to go to)
        //set the current index back 1
        if (this.state.currentIndex > 0) {
            this.setState((prevCard) => ({
                currentIndex: prevCard.currentIndex - 1,
                fronview: true
            }));
        }
    };

    flipCard = () => {
        //update the card's previous state
        //create a function that flips card from front to back view with click
        this.setState((prevCard) => ({ frontview: !prevCard.frontview }))
    };
    
    render() {
       //getting index and front view from this.state object 
        const { currentIndex, frontview } = this.state;
        //getting cards prop from this.props object
        const { cards } = this.props;
        //defining current card to be to be currentindex
        const currentCard = cards[currentIndex];
        
        return (
            <div>
                <h2>Card Viewer</h2>
                <div className='index'>{currentIndex+1} / {cards.length}</div>
                <div className='container' onClick={this.flipCard}>
                    <div className='card'>
                        {frontview ? <p>{currentCard.front}</p> : <p>{currentCard.back}</p>}
                    </div>
                </div>
                <div className='buttons-container'>
                    <div className='front' onClick={this.prevCard}>previous</div>
                    <div className='back' onClick={this.nextCard}>next</div>
                </div>
                <button className='switch' onClick={this.props.switchMode}>go to card viewer</button>
            </div>
        );
    }
}

export default CardViewer;
