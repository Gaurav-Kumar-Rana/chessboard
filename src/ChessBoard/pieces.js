import React, { Component } from 'react';
import { Draggable } from 'react-drag-and-drop';

class Pieces extends Component{

    constructor(props){
        super(props);
        this.state = {
            chessCellData: this.createPlayer(),
            chessBoardWidth:80 * 10,
            pos:{x:0,y:0}
        };
    }
    createPlayer(){
        var i=0,j=0,k=0;
        var _playerData = [];
        for(i=0;i<this.props.team;i++){
            for(j=0;j<this.props.chessboardPlayer.length;j++){
                for(k=0;k<this.props.chessboardPlayer[j].count;k++){
                    _playerData.push({
                        "team":(i?"black":"white"),
                        "type":this.props.chessboardPlayer[j].type,
                        "playername":this.props.chessboardPlayer[j].playername,
                        "playermove":this.props.chessboardPlayer[j].playermove,
                        "playerstatus":this.props.chessboardPlayer[j].status,
                        "identity":k+1,
                    })
                }
            }
        }
        return _playerData;
    }
    render(){
        return(
            this.state.chessCellData.map((player,index) => <Draggable type="piece" data={JSON.stringify(player)} key={index} id={player.team +'_type'+player.type+'_'+player.identity} className={"pieces " + player.team +" "+ player.playername +" iden_"+player.identity} onDragEnd={this.onDragEnd}></Draggable>)
        )
    }
}

export default Pieces;