import {game} from '../config/game.js'
import { determinePiece } from './piecesDetermination/determinePieces.js'
import { playerTurn } from './playerTurn.js'

export const checkmate = {
    gameOver : false,
    check : false,
    checkedPosition : null,
    kingChecked : null,
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

    isCheck(game){
        const kingPositions = this.getKingPiecePosition();
        for (let kingPosition of kingPositions){
            if (determinePiece.potentialDeterminations.includes(kingPosition)){
                const kingBox = document.querySelector(`#${kingPosition}`);
                this.check = true;
                kingBox.classList.add('check')
                this.checkedPosition = kingPosition;
                this.kingChecked = game[kingPosition]
                break
            }else{
                this.check = false;
                this.kingChecked = null;
                const pieceBoxes = document.querySelectorAll('.piece-box');
                pieceBoxes.forEach( box => {
                    box.classList.remove('check')
                })
            }
        }
    },

    isCheckMate(game){
        if (this.check){
            const kingChecked = this.kingChecked;
            let xxx = [];
            if (kingChecked) {
                const kingIsWhitePiece = playerTurn.isWhitePiece(kingChecked);
                for (let position in game){
                    if (game[position] !== null && playerTurn.isWhitePiece(game[position]) === kingIsWhitePiece){
                        let pieceBoxId = position;
                        let pieceType = game[position]
                        let isWhitePiece = playerTurn.isWhitePiece(pieceType);
                        let cantMove = this.cantMoveDueToCheck({pieceType, pieceBoxId, game, isWhitePiece});
                        if (cantMove === true) {
                            continue
                        }
                        else{
                            xxx.push(position)
                            break
                        }
                    }
                }
                if (xxx.length < 1){
                    console.log('It is checkmate');
                }    
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

        if(certainPositions.length === 0){
            return true
        }

        return certainPositions
    },

    resetGameClone(){
        this.gameClone = JSON.parse(JSON.stringify(game))
    }

}