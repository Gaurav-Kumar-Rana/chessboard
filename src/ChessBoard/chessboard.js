import React, { Component } from 'react';
import ChessBoardCell from'./chessboardcell.js';
const eachCellWidth = 80;

class ChessBoard extends Component{
    constructor(props){
        super(props);
        this.chessboardData = this.props.chessboardData[0];
        this.createCellData = this.createCellData.bind(this);
        this.state = {
            chessCellData: this.createCellData(),
            chessBoardWidth: eachCellWidth * this.chessboardData.cellcount_row
        };
    }
    createCellData(){
        var _cellCount_row = this.chessboardData.cellcount_row;
        var _cellCount_col = this.chessboardData.cellcount_col;
        var _cellType = this.chessboardData.celltype;
        var _chessCellData = [];
        var i = 0,j = 0;
        for(i=1;i<=_cellCount_row;i++){
            for(j=1;j<=_cellCount_col;j++){
                _chessCellData.push({"index":String(i)+String(j),"cellColor":_cellType[(i + j) %2].cellcolor});
            } 
        }
        return _chessCellData;
    }
    render(){
        return(
            <div className="chess-cell-container" id="chessBoard" style={{'width':this.state.chessBoardWidth,'height':this.state.chessBoardWidth}}>
                {this.state.chessCellData.map((cell,index) => <ChessBoardCell id={cell.index} key={index} cellClass={cell.cellColor}/>)}
            </div>
        )
    }
}

export default ChessBoard;