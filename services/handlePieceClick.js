import { playerTurn } from "./playerTurn.js";
import { data } from "../config/data.js";
import { checkmate } from "./checkmate.js";
import { boardRender } from "./renderBoard.js";
import { determinePiece } from "./piecesDetermination/determinePieces.js";
import { game } from "../config/game.js";
import castlingHelper from "./piecesDetermination/castlingHelper.js";
import { handleHistory } from "./handleHistory.js";


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
                if(checkmate.check){
                    let data = checkmate.cantMoveDueToCheck({pieceType, pieceBoxId, game, isWhitePiece});
                    if (data !== true) {
                        determinePiece.setPossiblePositions(data)
                        determinePiece.displayPossibleSquares()
                    }
                }
                else{
                    determinePiece.getCurrentDeterminations({pieceType, pieceBoxId, isWhitePiece}, game)
                    determinePiece.pieceCausingSelfCheck({ pieceBoxId, isWhitePiece }, game);
                    if (!data.hasBlackKingMoved && !data.castledAlready.black){
                        castlingHelper.kingCantCastle({isWhitePiece})
                    }
                    if (!data.hasWhiteKingMoved && !data.castledAlready.white){
                        castlingHelper.kingCantCastle({isWhitePiece})
                    }
                    determinePiece.displayPossibleSquares()
                }               
            }
          }
          else{
            let possiblePositions = determinePiece.getPossiblePositions();
            let x = possiblePositions.includes(pieceBoxId);
                if (pieceBoxId !== boxClicked){
                    const isWhitePiece = playerTurn.isWhitePiece(game[boxClicked])
                    const kingPosition = isWhitePiece ? checkmate.getKingPiecePosition()[0] : 
                                                       checkmate.getKingPiecePosition()[1]
                    if (x && possiblePositions){
                        if (boxClicked === kingPosition){
                            if(isWhitePiece && !data.castledAlready.white){
                                castlingHelper.castlingHelper({boxClicked, pieceBoxId, isWhitePiece})
                            }else if(!isWhitePiece && !data.castledAlready.black){
                                castlingHelper.castlingHelper({boxClicked, pieceBoxId, isWhitePiece})
                            }else{
                                boardRender.updateBoard({pieceBoxId, boxClicked})    
                            }

                            determinePiece.resetPossibleSolutions()
                            determinePiece.fillPotentialDeterminations(game)
                            console.log(determinePiece.potentialDeterminations);
                            determinePiece.resetPotentialDeterminations()
                            playerTurn.changeTurn()
                            data.resetBoxClicked()
                            data.changeIsBoxClicked()
                            boardRender.addPiecesEventListeners()
                        }
                        else{
                            boardRender.updateBoard({pieceBoxId, boxClicked})
                            determinePiece.resetPossibleSolutions()
                            determinePiece.fillPotentialDeterminations(game)
                            console.log(determinePiece.potentialDeterminations);
                            determinePiece.resetPotentialDeterminations()
                            playerTurn.changeTurn()
                            data.resetBoxClicked()
                            data.changeIsBoxClicked()
                            boardRender.addPiecesEventListeners()
                        }
                            handleHistory.addToHistory(game);
                            console.log(handleHistory.history);
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