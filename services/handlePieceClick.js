import { playerTurn } from "./playerTurn.js";
import { data } from "../config/data.js";
import { checkmate } from "./checkmate.js";
import { boardRender } from "./renderBoard.js";
import { determinePiece } from "./piecesDetermination/determinePieces.js";
import { game } from "../config/game.js";


export default {
    handlePieceClick({pieceType, pieceBox, pieceBoxes, pieceBoxId}){
        pieceBoxes.forEach(pieceBoxElement => {
            pieceBoxElement.classList.remove('possible-square')
            if (pieceBoxElement !== pieceBox){
                pieceBoxElement.classList.remove('piece-box-click')
            }
        })

        let boxClicked = data.boxClicked;

        

          if (!data.isBoxClicked){
            if (playerTurn.isWrongTurn(pieceType)){
                return;
            }
            else if (pieceType){
                const isWhitePiece = playerTurn.isWhitePiece(pieceType)
                data.changeIsBoxClicked()
                data.setBoxClicked(pieceBoxId)
                pieceBox.classList.add('piece-box-click')                
                // determinePiece.getCurrentDeterminations({pieceType, pieceBoxId, isWhitePiece}, game)
                // determinePiece.displayPossibleSquares()
                if(checkmate.check){
                    let data = checkmate.cantMoveDueToCheck({pieceType, pieceBoxId, game, isWhitePiece})
                    if (data !== true) {
                        determinePiece.setPossiblePositions(data)
                        determinePiece.displayPossibleSquares()
                    }
                }
                else{
                    determinePiece.getCurrentDeterminations({pieceType, pieceBoxId, isWhitePiece}, game)
                    determinePiece.displayPossibleSquares()
                }               
            }
          }
          else{
            let possiblePositions = determinePiece.getPossiblePositions();
            let x = possiblePositions.includes(pieceBoxId);
                if (pieceBoxId !== boxClicked){
                    if (x && possiblePositions){
                        boardRender.updateBoard({pieceBoxId, boxClicked})
                        determinePiece.resetPossibleSolutions()
                        determinePiece.getPotentialDeterminations(game)
                        determinePiece.resetPotentialDeterminations()
                        playerTurn.changeTurn()
                        data.resetBoxClicked()
                        data.changeIsBoxClicked()
                        boardRender.addPiecesEventListeners()
                    }
                    else{
                        data.resetBoxClicked();
                        data.changeIsBoxClicked();
                        determinePiece.resetPossibleSolutions()
                    }
                    
                }else{
                    data.resetBoxClicked();
                    data.changeIsBoxClicked();
                    determinePiece.resetPossibleSolutions()
                    pieceBox.classList.remove('piece-box-click')
                }        
                    
          }
    },
}