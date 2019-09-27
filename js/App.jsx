import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {


    //noinspection JSAnnotator
    state = {
        boxes: [],
        player1: 'Marek',
        player2: 'Janusz',
        currentPlayer: null,
        round: 1,

    };

    boxPressed = () => {
        const pickPlayer = this.state.round%2 === 0 ? this.state.player2 : this.state.player1;
            this.setState({
                round: this.state.round + 1,
                currentPlayer: pickPlayer,
            });
            console.log(this.state.round);
            console.log(this.state.currentPlayer);
        };




    render() {
        return (
            <div>
                <h1>Tic tac toe dziala!</h1>
                <Board singleBoxPressed={this.boxPressed}/>
            </div>
        )
    }
}

export default App;