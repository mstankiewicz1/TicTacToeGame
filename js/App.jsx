import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {


    render() {
        return (
            <div>
                <h1>Tic tac toe dziala!</h1>
                <Board/>
            </div>
        )
    }
}

export default App;