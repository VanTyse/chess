import { playerTurn } from "../playerTurn.js";
import { alphabetToNumber, numberToAlphabet } from "../../config/alphabetNumbers.js";

export default{
    determineKing({pieceBoxId, isWhitePiece}, game){
        const col = +alphabetToNumber[pieceBoxId.slice(0, 1)];
        const row = +pieceBoxId.slice(1, 2)
        let possiblePositions = this.possiblePositions;
        
        const northBox = (row + 1 > 8) ? null : `${numberToAlphabet[col]}${row + 1}`
        const southBox = (row - 1 < 1) ? null : `${numberToAlphabet[col]}${row - 1}`
        const eastBox = (col + 1 > 8) ? null : `${numberToAlphabet[col + 1]}${row}`
        const westBox = (col - 1 < 1) ? null : `${numberToAlphabet[col - 1]}${row}`
        const northEastBox = (col + 1 > 8 || row + 1 > 8) ? null : `${numberToAlphabet[col + 1]}${row + 1}`
        const northWestBox = (col - 1 < 1 || row + 1 > 8) ? null : `${numberToAlphabet[col - 1]}${row + 1}`
        const southEastBox = (col + 1 > 8 || row - 1 < 1) ? null : `${numberToAlphabet[col + 1]}${row - 1}`
        const southWestBox = (col - 1 < 1 || row - 1 < 1) ? null : `${numberToAlphabet[col - 1]}${row - 1}`

        
        const boxes = [northBox, southBox, eastBox, westBox, northEastBox, northWestBox, southEastBox, southWestBox]

        boxes.forEach( pos => {
            if(pos === null)return;
            let piece = game[pos] ? true : false
            if (isWhitePiece){
                if (piece){
                    let pieceType = game[pos];
                    if (!playerTurn.isWhitePiece(pieceType)){
                        possiblePositions.push(pos)
                    }
                }else{
                    possiblePositions.push(pos);
                }
            }else{
                if(piece){
                    let pieceType = game[pos];
                    if(playerTurn.isWhitePiece(pieceType)){
                        possiblePositions.push(pos);
                    }
                }else{
                    possiblePositions.push(pos);
                }
            }
        })   
    }
}