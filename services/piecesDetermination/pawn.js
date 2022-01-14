import { playerTurn } from "../playerTurn.js";
import { alphabetToNumber, numberToAlphabet } from "../../config/alphabetNumbers.js";


export default {
    determinePawn({pieceBoxId, isWhitePiece}, game){
        const col = +alphabetToNumber[pieceBoxId.slice(0, 1)];
        const row = +pieceBoxId.slice(1, 2)
        let possiblePositions = this.possiblePositions;        

        if (row === ((isWhitePiece) ? 1 : 8))return;   

        if(row === ((isWhitePiece) ? 2 : 7)){
            if (!this.checkPieceInFront({row, col, isWhitePiece}, game)){
                possiblePositions.push(`${numberToAlphabet[col]}${isWhitePiece ? 3 : 6}`);
                possiblePositions.push(`${numberToAlphabet[col]}${isWhitePiece ? 4 : 5}`);
            }
                  
            const rowWhite = 3;
            const rowBlack = 6;
            this.checkdDiagonals({col, isWhitePiece, rowWhite, rowBlack, possiblePositions}, game)
        }

        if (row === ((isWhitePiece) ? 3 : 6)){
            if (!this.checkPieceInFront({row, col, isWhitePiece}, game)){
                possiblePositions.push(`${numberToAlphabet[col]}${isWhitePiece ? 4 : 5}`)
            }
            
            const rowWhite = 4;
            const rowBlack = 5;
            this.checkdDiagonals({col, isWhitePiece, rowWhite, rowBlack, possiblePositions}, game)
        }
        
        if(row === ((isWhitePiece) ? 4 : 5)){
            if (!this.checkPieceInFront({row, col, isWhitePiece}, game)){
                possiblePositions.push(`${numberToAlphabet[col]}${isWhitePiece ? 5 : 4}`)
            }
            
            const rowWhite = 5;
            const rowBlack = 4;
            this.checkdDiagonals({col, isWhitePiece, rowWhite, rowBlack, possiblePositions}, game)
        }
        
        if (row === ((isWhitePiece) ? 5 : 4)){
            if (!this.checkPieceInFront({row, col, isWhitePiece}, game)){
                possiblePositions.push(`${numberToAlphabet[col]}${isWhitePiece ? 6 : 3}`)
            }
            const rowWhite = 6;
            const rowBlack = 3;
            this.checkdDiagonals({col, isWhitePiece, rowWhite, rowBlack, possiblePositions}, game)
        }
        
        if (row === ((isWhitePiece) ? 6 : 3)){
            if (!this.checkPieceInFront({row, col, isWhitePiece}, game)){
                possiblePositions.push(`${numberToAlphabet[col]}${isWhitePiece ? 7 : 2}`)
            }
            
            const rowWhite = 7;
            const rowBlack = 2;
            this.checkdDiagonals({col, isWhitePiece, rowWhite, rowBlack, possiblePositions}, game)
        }
        
        if (row === ((isWhitePiece) ? 7 : 2)){
            if (!this.checkPieceInFront({row, col, isWhitePiece}, game)){
                possiblePositions.push(`${numberToAlphabet[col]}${isWhitePiece ? 8 : 1}`)
            }
            
            const rowWhite = 8;
            const rowBlack = 1;
            this.checkdDiagonals({col, isWhitePiece, rowWhite, rowBlack, possiblePositions}, game)
        }
    },

    checkdDiagonals({col, isWhitePiece, rowWhite, rowBlack, possiblePositions}, game){
        const left = col - 1
        const right = col + 1

        const diagLeft = `${numberToAlphabet[left]}${isWhitePiece ?  rowWhite : rowBlack}`;
        const diagRight = `${numberToAlphabet[right]}${isWhitePiece ? rowWhite : rowBlack}`;

        const diagleftBox = game[diagLeft]
        const diagrightBox = game[diagRight]

        const diagleftPiece = diagleftBox ? true : false;
        const diagrightPiece = diagrightBox ? true : false;

        if (isWhitePiece){
            if (diagleftPiece){
                let pieceType = diagleftBox
                if (!playerTurn.isWhitePiece(pieceType)){
                    possiblePositions.push(diagLeft)
                };
            }
            if (diagrightPiece){
                let pieceType = diagrightBox
                if (!playerTurn.isWhitePiece(pieceType)){
                    possiblePositions.push(diagRight)
                };
            }
        } 
        else{
            if (diagleftPiece){
                let pieceType = diagleftBox
                if (playerTurn.isWhitePiece(pieceType)){
                    possiblePositions.push(diagLeft)
                };
            }
            if (diagrightPiece){
                let pieceType = diagrightBox
                if (playerTurn.isWhitePiece(pieceType)){
                    possiblePositions.push(diagRight)
                };
            }
        }

    },

    checkPieceInFront({row, col, isWhitePiece}, game){
        const rowWhite = row + 1;
        const rowBlack = row - 1
        const front = `${numberToAlphabet[col]}${isWhitePiece ?  rowWhite : rowBlack}`;
        const frontBox = game[front];
        const frontPiece = frontBox !== null;

        if (frontPiece){
            return true
        }

        else{
            return false;
        }
    },

    getPossiblePositions(){
        return this.possiblePositions;
    },

    resetPossibleSolutions(){
        this.possiblePositions = []
    }
}