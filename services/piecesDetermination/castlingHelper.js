import { boardRender } from "../renderBoard.js";
import { data } from "../../config/data.js";
import { game } from "../../config/game.js";
import { determinePiece } from "./determinePieces.js";

export default {
    castlingHelper({boxClicked, pieceBoxId, isWhitePiece}){
        if(isWhitePiece){
            if(!data.hasWhiteKingMoved){
                data.setWhiteKingMoved()
                if (pieceBoxId === 'g1'){
                    const rookPosition = 'h1';
                    const futureRookPosition = 'f1'
                    game[futureRookPosition] = game[rookPosition]
                    game[rookPosition] = null
                    boardRender.updateBoard({pieceBoxId, boxClicked, rookPosition})
                    data.setCastledAlready(isWhitePiece)
                } else if (pieceBoxId === 'c1'){
                    const rookPosition = 'a1';
                    const futureRookPosition = 'd1'
                    game[futureRookPosition] = game[rookPosition]
                    game[rookPosition] = null
                    boardRender.updateBoard({pieceBoxId, boxClicked, rookPosition})
                    data.setCastledAlready(isWhitePiece)
                }
                else{
                    boardRender.updateBoard({pieceBoxId, boxClicked})
                }
            }
            else{
                boardRender.updateBoard({pieceBoxId, boxClicked})
            }
        }
        else{   
            if(!data.hasBlackKingMoved){
                data.setBlackKingMoved()
                if (pieceBoxId === 'g8'){
                    const rookPosition = 'h8';
                    const futureRookPosition = 'f8'
                    game[futureRookPosition] = game[rookPosition]
                    game[rookPosition] = null
                    boardRender.updateBoard({pieceBoxId, boxClicked, rookPosition})
                    data.setCastledAlready(isWhitePiece)
                }else if (pieceBoxId === 'c8'){
                    const rookPosition = 'a8';
                    const futureRookPosition = 'd8'
                    game[futureRookPosition] = game[rookPosition]
                    game[rookPosition] = null
                    boardRender.updateBoard({pieceBoxId, boxClicked, rookPosition})
                    data.setCastledAlready(isWhitePiece)
                }
                else{
                    boardRender.updateBoard({pieceBoxId, boxClicked})
                }
            }
            else{
                boardRender.updateBoard({pieceBoxId, boxClicked})
            }
        }    
        console.log(data.hasWhiteKingMoved, data.hasBlackKingMoved);
    },
    
    kingCantCastle({isWhitePiece}){
        let possiblePositions = determinePiece.getPossiblePositions();
        const kingSidePosition = isWhitePiece ? 'g1' : 'g8'
        const queenSidePosition = isWhitePiece ? 'c1' : 'c8'
        const kingSideNullPosition = isWhitePiece ? 'f1' : 'f8'
        const queenSideNullPosition1 = isWhitePiece ? 'b1' : 'b8'
        const queenSideNullPosition2 = isWhitePiece ? 'd1' : 'd8'

        if(!possiblePositions.includes(kingSideNullPosition)){
            for (let i = 0; i < possiblePositions.length; i++){
                if (possiblePositions[i] === kingSidePosition){
                    possiblePositions.splice(i, 1);
                }
            }
        }

        if (!possiblePositions.includes(queenSideNullPosition2)){
            for (let i = 0; i < possiblePositions.length; i++){
                if (possiblePositions[i] === queenSidePosition){
                    possiblePositions.splice(i, 1);
                }
            }
        }
    },
}