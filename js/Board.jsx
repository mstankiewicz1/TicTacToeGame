import React from 'react';


class Board extends React.Component {

    clickBox = () => {
      this.props.singleBoxPressed();
      this
    };





    render() {
        return (
            <div className="board">
                <div className="box" onClick={this.clickBox}/>
                <div className="box" onClick={this.clickBox}/>
                <div className="box" onClick={this.clickBox}/>
                <div className="box" onClick={this.clickBox}/>
                <div className="box" onClick={this.clickBox}/>
                <div className="box" onClick={this.clickBox}/>
                <div className="box" onClick={this.clickBox}/>
                <div className="box" onClick={this.clickBox}/>
                <div className="box" onClick={this.clickBox}/>
            </div>
        )
    }
}

export default Board;