import {game} from '../config/game.js'
import { determinePiece } from './piecesDetermination/determinePieces.js'

export const checkmate = {
    gameOver : false,
    check : false,
    checkedPosition : null,
    gameClone : undefined,

    getGameClone(){
        if (this.check) {
            this.gameClone = JSON.parse(JSON.stringify(game))
        }
    },

    getKingPiecePosition(){

        for (let position in game){
            if (game[position] === 'white_king'){
                this.whiteKingPosition =  position
            }
            if (game[position] === 'black_king'){
                this.blackKingPosition =  position
            }
        }

        return [this.whiteKingPosition, this.blackKingPosition]
    },

    isCheck(){
        const kingPositions = this.getKingPiecePosition();
        for (let kingPosition of kingPositions){
            if (determinePiece.potentialDeterminations.includes(kingPosition)){
                const kingBox = document.querySelector(`#${kingPosition}`);
                this.check = true;
                kingBox.classList.add('check')
                this.checkedPosition = kingPosition;
                break
            }else{
                const kingBox = document.querySelector(`#${kingPosition}`);
                this.check = false;
                kingBox.classList.remove('check')
            }
        }
    },

    cantMoveDueToCheck({pieceType, pieceBoxId, game, isWhitePiece}){
        let kingPosition = this.checkedPosition;
        this.getGameClone();
        determinePiece.getCurrentDeterminations({pieceBoxId, isWhitePiece, pieceType}, game)
        const uncertainPositions = determinePiece.possiblePositions;
        determinePiece.resetPossibleSolutions()
        let certainPositions = [];

        uncertainPositions.forEach( pos => {
            if(pieceBoxId === kingPosition){
                kingPosition = pos
            }

            this.gameClone[pos] = this.gameClone[pieceBoxId]
            this.gameClone[pieceBoxId] = null;
            determinePiece.resetPossibleSolutions()
            let potentialDeterminations = determinePiece.getPotentialDeterminations( this.gameClone );

            if (!potentialDeterminations.includes(kingPosition)){
                certainPositions.push(pos)
            }

            this.resetGameClone()
            kingPosition = this.checkedPosition
        })

        console.log(certainPositions);

        if(certainPositions.length === 0){
            return true
        }

        return certainPositions
    },

    resetGameClone(){
        this.gameClone = JSON.parse(JSON.stringify(game))
    }

}