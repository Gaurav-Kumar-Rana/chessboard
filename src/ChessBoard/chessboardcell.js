import React, { Component } from 'react';
import { Droppable } from 'react-drag-and-drop'

class ChessBoardCell extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }
    onDrop(data) {
        console.log(JSON.parse(data.piece));
    }
    render(){
        return(
            <Droppable types={['piece']} id={this.props.id} className={"chess-cell "+this.props.cellClass} onDrop={this.onDrop.bind(this)}></Droppable>
        )
    }
}

export default ChessBoardCell;