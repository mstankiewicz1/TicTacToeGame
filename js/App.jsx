import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {


    state = {
        boxes: [],
    };

    boxPressed = () => {
      console.log("wcisnąlem pole");
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