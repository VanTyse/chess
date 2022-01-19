import { playerTurn } from "../playerTurn.js";
import { alphabetToNumber, numberToAlphabet } from "../../config/alphabetNumbers.js";
import { data } from "../../config/data.js";
import { checkmate } from "../checkmate.js";

export default{
    determineKing({pieceBoxId, isWhitePiece}, game){
        const col = +alphabetToNumber[pieceBoxId.slice(0, 1)];
        const row = +pieceBoxId.slice(1, 2)
        let possiblePositions = this.getPossiblePositions();
        
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

        if (!checkmate.check && !data.castledAlready.white){
            this.castling({isWhitePiece, possiblePositions, col, row}, game)
        }        
        if (!checkmate.check && !data.castledAlready.black){
            this.castling({isWhitePiece, possiblePositions, col, row}, game)
        }
        this.setPossiblePositions(possiblePositions)
    },

    castling({isWhitePiece, possiblePositions, col, row}, game){
        //to the right
        for(let i = 1; i < 3; i++){
            let pos = `${numberToAlphabet[col + i]}${row}`
            if(game[pos] === null){
                if(game[pos] === null && i === 2){
                    if(isWhitePiece){
                        if(!data.hasWhiteKingMoved){
                            possiblePositions.push(pos)
                        }
                        else{
                            break
                        }
                    }
                    else{
                        if(!data.hasBlackKingMoved){
                            possiblePositions.push(pos)
                        }
                    }
                }
                continue;
            }
            else{
                continue
            }
        }
        
        //to the left
        for(let i = 1; i < 4; i++){
            let pos = `${numberToAlphabet[col - i]}${row}`
            if(game[pos] === null){
                if(game[pos] === null && i === 3){
                    if(isWhitePiece){
                        if(!data.hasWhiteKingMoved){
                            possiblePositions.push(`${numberToAlphabet[col - 2]}${row}`)
                        }
                    }
                    else{
                        if(!data.hasBlackKingMoved){
                            possiblePositions.push(`${numberToAlphabet[col - 2]}${row}`)
                        }
                    }
                }
                continue;
            }
            else{
                continue
            }
        }
    }
}