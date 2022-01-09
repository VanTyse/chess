import { playerTurn } from "../playerTurn.js";
import { alphabetToNumber, numberToAlphabet } from "../../config/alphabetNumbers.js";

export default{
    determineKing({pieceBoxId, isWhitePiece}){
        const col = +alphabetToNumber[pieceBoxId.slice(0, 1)];
        const row = +pieceBoxId.slice(1, 2)
        let possiblePositions = this.possiblePositions;

        for (let i = 0; i < 2; i++){
            for (let j = 0; (j < 2); j++){
                if(i === 0 && j===0){
                    continue
                }

                let dynamicRow = row + i;
                let dynamicCol= col + j;

                
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
        }

        for (let i = 0; i < 2; i++){
            for (let j = 0; (j < 2); j++){
                if(i === 0 && j===0){
                    continue
                }
                let dynamicRow = row + i;
                let dynamicCol= col - j;

                
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
        }

        for (let i = 0; i < 2; i++){
            for (let j = 0; (j < 2); j++){
                if(i === 0 && j===0){
                    continue
                }
                let dynamicRow = row - i;
                let dynamicCol= col + j;

                
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
        for (let i = 0; i < 2; i++){
            for (let j = 0; (j < 2); j++){
                if(i === 0 && j===0){
                    continue
                }
                let dynamicRow = row - i;
                let dynamicCol= col - j;

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
        }
    }
}