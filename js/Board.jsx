import React from 'react';


class Board extends React.Component {

    clickBox = () => {
      this.props.singleBoxPressed();
    };



    render() {
        return (
            <div className="board">
                <div name="box" className="box" data-row="0" data-column="0" onClick={this.clickBox}/>
                <div name="box" className="box" data-row="0" data-column="1" onClick={this.clickBox}/>
                <div name="box" className="box" data-row="0" data-column="2" onClick={this.clickBox}/>
                <div name="box" className="box" data-row="1" data-column="0" onClick={this.clickBox}/>
                <div name="box" className="box" data-row="1" data-column="1" onClick={this.clickBox}/>
                <div name="box" className="box" data-row="1" data-column="2" onClick={this.clickBox}/>
                <div name="box" className="box" data-row="2" data-column="0" onClick={this.clickBox}/>
                <div name="box" className="box" data-row="2" data-column="1" onClick={this.clickBox}/>
                <div name="box" className="box" data-row="2" data-column="2" onClick={this.clickBox}/>
            </div>
        )
    }
}

export default Board;