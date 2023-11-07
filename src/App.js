import React from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { front: 'front1', back: 'back1' },
        { front: 'front2', back: 'back2' },
      ],
      editor: true,
    };
  }

  //not the original object but a copy
  //set cards to cards
  addCard = card => {
    const cards = this.state.cards.slice().concat(card);
    this.setState({ cards });
  }

  deleteCard = index => {
    const cards = this.state.cards.slice();
    //remove 1 element at this index
    //splice function mutates the card array in place, cards is being changed
    //dont do cards = splice bc thatll output u the removed card
    cards.splice(index, 1);
    this.setState({ cards });
  }

  switchMode = () => this.setState({ editor: !this.state.editor });

  render() {
    if (this.state.editor) {
      return (
        <CardEditor 
          addCard={this.addCard} 
          cards={this.state.cards} 
          deleteCard={this.deleteCard}
          switchMode={this.switchMode}
        />
      );
    } else {
      return <CardViewer switchMode={this.switchMode} />;
    }
  } 
}

export default App;

//app.js is where the card state is
//set of cards is stored in app state, only way to change app state is
//defining a function to set the state of the app component, afterwards we can pass the function
