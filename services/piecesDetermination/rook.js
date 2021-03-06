import { playerTurn } from "../playerTurn.js";
import { alphabetToNumber, numberToAlphabet } from "../../config/alphabetNumbers.js";

export default {
    determineRook({pieceBoxId, isWhitePiece}, game){
        const col = +alphabetToNumber[pieceBoxId.slice(0, 1)];
        const row = +pieceBoxId.slice(1, 2)
        let possiblePositions = this.possiblePositions;
        //for n

        for (let i = 1; i < 8; i++){
            let dynamicRow = row + i;
            if (dynamicRow > 8){
                break
            }

            let position = `${numberToAlphabet[col]}${dynamicRow}`;
            let piece = game[position] !== null;
            if (isWhitePiece){
                if (piece){
                    let pieceType = game[position]
                    if (!playerTurn.isWhitePiece(pieceType)){
                        possiblePositions.push(position)
                        break
                    }
                    else{
                        break
                    }
                }else{
                    possiblePositions.push(position);
                }
            }else{
                if(piece){
                    let pieceType = game[position];
                    if(playerTurn.isWhitePiece(pieceType)){
                        possiblePositions.push(position);
                        break;
                    }
                    else{
                        break
                    }
                }else{
                    possiblePositions.push(position);
                }
            }
        }

        //for s

        for (let i = 1; i < 8; i++){
            let dynamicRow = row - i;
            if (dynamicRow < 1){
                break
            }

            let position = `${numberToAlphabet[col]}${dynamicRow}`;
            let piece = game[position] ? true : false;

            if (isWhitePiece){
                if (piece){
                    let pieceType = game[position];
                    if (!playerTurn.isWhitePiece(pieceType)){
                        possiblePositions.push(position)
                        break
                    }
                    else{
                        break
                    }
                }else{
                    possiblePositions.push(position);
                }
            }else{
                if(piece){
                    let pieceType = game[position];
                    if(playerTurn.isWhitePiece(pieceType)){
                        possiblePositions.push(position);
                        break;
                    }
                    else{
                        break
                    }
                }else{
                    possiblePositions.push(position);
                }
            }
        }

        //for e

        for (let i = 1; i < 8; i++){
            let dynamicCol = col + i;
            if (dynamicCol > 8){
                break
            }

            let position = `${numberToAlphabet[dynamicCol]}${row}`;
            let piece = game[position] !== null

            if (isWhitePiece){
                if (piece){
                    let pieceType = game[position]
                    if (!playerTurn.isWhitePiece(pieceType)){
                        possiblePositions.push(position)
                        break
                    }
                    else{
                        break
                    }
                }else{
                    possiblePositions.push(position);
                }
            }else{
                if(piece){
                    let pieceType = game[position]
                    if(playerTurn.isWhitePiece(pieceType)){
                        possiblePositions.push(position);
                        break;
                    }
                    else{
                        break
                    }
                }else{
                    possiblePositions.push(position);
                }
            }
        }

        //for w

        for (let i = 1; i < 8; i++){
            let dynamicCol = col - i;
            if (dynamicCol < 1){
                break
            }

            let position = `${numberToAlphabet[dynamicCol]}${row}`;
            let piece = game[position] !== null;

            if (isWhitePiece){
                if (piece){
                    let pieceType = game[position]
                    if (!playerTurn.isWhitePiece(pieceType)){
                        possiblePositions.push(position)
                        break
                    }
                    else{
                        break
                    }
                }else{
                    possiblePositions.push(position);
                }
            }else{
                if(piece){
                    let pieceType = game[position];
                    if(playerTurn.isWhitePiece(pieceType)){
                        possiblePositions.push(position);
                        break;
                    }
                    else{
                        break
                    }
                }else{
                    possiblePositions.push(position);
                }
            }
        }
    }    
}