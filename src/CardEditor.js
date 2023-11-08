import React from 'react';
import './CardEditor.css';

//component keeps its own state
class CardEditor extends React.Component {
    constructor(props) {
        super(props);
        //create props; front and back attribute for value inputs
        this.state = {front: '', back: ''};
    }
    //when a user clicks a key, OnChange is fired and handlechange is called with event being changed
    //setting state of card editor front to be the value that the user inputs
    //value is then passed back into the output to be shown to user
    //changing the state, passing the state back to value of input

    //take the value of the name, not the string
    //handle function knows exactly which state to change bc of name
    
    addCard = () => {
        if (this.state.front.trim() !== '' && this.state.back.trim() !== '') {
            this.props.addCard(this.state);
            this.setState({ front: '', back: '' });
        } else {
            //tell user they need to put in text, cant leave empyu
            alert('Please enter text for both front and back of the card.');
        }
    }
    
    deleteCard = index => this.props.deleteCard(index);

    handleChange = event => 
        this.setState({ [event.target.name]: event.target.value });
    
    render() {
        //flashcards getting passed from app component
        //map function should take input element of array and return what element becomes
        //iterating over each card and mapping it
        const cards = this.props.cards.map((card, index) => {
            return (
                <tr key={index}>  
                    <td>{card.front}</td>
                    <td>{card.back}</td>
                    <td>
                        <button onClick={() => this.deleteCard(index)}>delete card</button>
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <h2>Card Editor</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Front</th>
                            <th>Back</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>{cards}</tbody>
                </table>
                <br />
    
                <input 
                    name="front"
                    onChange={this.handleChange}
                    placeholder = "Front of card" 
                    value = {this.state.front}/>
                <input 
                    name="back"
                    onChange={this.handleChange}
                    placeholder= "Back of card" 
                    value = {this.state.back} />
                <button onClick={this.addCard}>Add card</button>
                <hr />
                <button onClick={this.props.switchMode}>go to card viewer</button>
            </div>
        );
    }
}

export default CardEditor;

//tells react we want cards array <tbody>{cards}</tbody>
