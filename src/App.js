import React from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { front: 'front1', back: 'back1' },
        { front: 'front2', back: 'back2' },
      ],
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


  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Homepage></Homepage>
        </Route>
        <Route exact path="/editor">
          <CardEditor
            addCard={this.addCard}
            cards={this.state.cards}
            deleteCard={this.deleteCard}
          />
        </Route>
        <Route exact path="/viewer">
          <CardViewer cards={this.state.cards} />
        </Route>
      </Switch>
    );
  } 
}

export default App;

//app.js is where the card state is
//set of cards is stored in app state, only way to change app state is
//defining a function to set the state of the app component, afterwards we can pass the function
