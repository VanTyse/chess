import { playerTurn } from "../playerTurn.js";
import { alphabetToNumber, numberToAlphabet } from "../../config/alphabetNumbers.js";

export default {
    determineKnight({pieceBoxId, isWhitePiece}, game){
        const col = +alphabetToNumber[pieceBoxId.slice(0, 1)];
        const row = +pieceBoxId.slice(1, 2)
        let possiblePositions = this.possiblePositions; 

        for (let i = 1; i < 3; i++){
            for (let j = 1; (j < 3); j++){
                if ((i === 1 && j === 1) || (i === 2 && j === 2)){
                    continue;
                }
                let dynamicRow = row + i;
                let dynamicCol= col + j;

                
                if (dynamicCol > 8 || dynamicRow > 8){
                    break
                }

                let position = `${numberToAlphabet[dynamicCol]}${dynamicRow}`;
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
        }

        for (let i = 1; i < 3; i++){
            for (let j = 1; j < 3; j++){
                if ((i === 1 && j === 1) || (i === 2 && j === 2)){
                    continue;
                }
                let dynamicRow = row + i;
                let dynamicCol= col - j;

                
                if (dynamicCol < 1 || dynamicRow > 8){
                    break
                }

                let position = `${numberToAlphabet[dynamicCol]}${dynamicRow}`;
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
        }

        for (let i = 1; i < 3; i++){
            for (let j = 1; (j < 3); j++){
                if ((i === 1 && j === 1) || (i === 2 && j === 2)){
                    continue
                }
                let dynamicRow = row - i;
                let dynamicCol= col + j;

                
                if (dynamicCol > 8 || dynamicRow < 1){
                    break
                }

                let position = `${numberToAlphabet[dynamicCol]}${dynamicRow}`;
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
        }
        for (let i = 1; i < 3; i++){
            for (let j = 1; (j < 3); j++){
                if ((i === 1 && j === 1) || (i === 2 && j === 2)){
                    continue
                }
                let dynamicRow = row - i;
                let dynamicCol= col - j;

                if (dynamicCol < 1 || dynamicRow < 1){
                    break
                }

                let position = `${numberToAlphabet[dynamicCol]}${dynamicRow}`;
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
}