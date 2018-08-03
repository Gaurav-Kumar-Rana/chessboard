import React, { Component } from 'react';
import './App.css';
import ChessBoard from'./ChessBoard/chessboard.js';
import Pieces from'./ChessBoard/pieces.js';

let info  = require('./chessboard_data.json');
let info_chessboard = info.chessboard;
let info_playerdata = info.playerdata;
let info_team = info.team;
const eachCellWidth = 80 * 8;

class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div className="chessboard-container" style={{'width':eachCellWidth,"height":eachCellWidth}}>
        <Pieces chessboardPlayer={info_playerdata} team={info_team}/>
        <ChessBoard chessboardData={info_chessboard}/>
      </div>
    );
  }
}
export default App;
