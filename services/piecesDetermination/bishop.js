import { numberToAlphabet, alphabetToNumber } from "../../config/alphabetNumbers.js";
import { playerTurn } from "../playerTurn.js";

export default {
    determineBishop({pieceBoxId, isWhitePiece}){
        const col = +alphabetToNumber[pieceBoxId.slice(0, 1)];
        const row = +pieceBoxId.slice(1, 2)
        let possiblePositions = this.possiblePositions;

        // for nw
        for (let i = 1; (i < 8); i++){
            let dynamicCol = col - i;
            let dynamicRow = row + i;
            if (dynamicCol < 1 || dynamicRow > 8){
                break
            }
            let position = `${numberToAlphabet[dynamicCol]}${dynamicRow}`;
            let currentBox = document.querySelector(`#${position}`);
            let piece = currentBox?.querySelector('.piece') ?? null;

            if (isWhitePiece){
                if (piece){
                    let pieceType = piece.getAttribute('piece-type')
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
                    let pieceType = piece.getAttribute('piece-type');
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

        // for sw
        for (let i = 1; (i < 8); i++){
            let dynamicCol = col - i;
            let dynamicRow = row - i;
            
            if (dynamicCol < 1 || dynamicRow < 1){
                break
            }

            let position = `${numberToAlphabet[dynamicCol]}${dynamicRow}`;
            let currentBox = document.querySelector(`#${position}`);
            let piece = currentBox?.querySelector('.piece') ?? null;

            if (isWhitePiece){
                if (piece){
                    let pieceType = piece.getAttribute('piece-type')
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
                    let pieceType = piece.getAttribute('piece-type');
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

        // for ne
        for (let i = 1; (i < 8); i++){
            let dynamicCol = col + i;
            let dynamicRow = row + i;
            
            if (dynamicCol > 8 || dynamicRow > 8){
                break
            }

            let position = `${numberToAlphabet[dynamicCol]}${dynamicRow}`;
            let currentBox = document.querySelector(`#${position}`);
            let piece = currentBox?.querySelector('.piece') ?? null;

            if (isWhitePiece){
                if (piece){
                    let pieceType = piece.getAttribute('piece-type')
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
                    let pieceType = piece.getAttribute('piece-type');
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

        // for se
        for (let i = 1; (i < 8); i++){
            let dynamicCol = col + i;
            let dynamicRow = row - i;
            
            if (dynamicCol > 8 || dynamicRow < 1){
                break
            }

            let position = `${numberToAlphabet[dynamicCol]}${dynamicRow}`;
            let currentBox = document.querySelector(`#${position}`);
            let piece = currentBox?.querySelector('.piece') ?? null;

            if (isWhitePiece){
                if (piece){
                    let pieceType = piece.getAttribute('piece-type')
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
                    let pieceType = piece.getAttribute('piece-type');
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