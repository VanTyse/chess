import { playerTurn } from "../playerTurn.js";
import { alphabetToNumber, numberToAlphabet } from "../../config/alphabetNumbers.js";

export const pawn = {
    determinePawn({pieceBoxId, isWhitePiece}){
        
        const col = +alphabetToNumber[pieceBoxId.slice(0, 1)];
        const row = +pieceBoxId.slice(1, 2)
        let possiblePositions = this.possiblePositions;        
        if (row === ((isWhitePiece) ? 1 : 8))return;   
        
        if(row === ((isWhitePiece) ? 2 : 7)){
            if (!this.checkPieceInFront({row, col, isWhitePiece})){
                possiblePositions.push(`${numberToAlphabet[col]}${isWhitePiece ? 3 : 6}`);
                possiblePositions.push(`${numberToAlphabet[col]}${isWhitePiece ? 4 : 5}`);
            }
                  
            const rowWhite = 3;
            const rowBlack = 6;
            this.checkdDiagonals({col, isWhitePiece, rowWhite, rowBlack, possiblePositions})
        }

        if (row === ((isWhitePiece) ? 3 : 6)){
            if (!this.checkPieceInFront({row, col, isWhitePiece})){
                possiblePositions.push(`${numberToAlphabet[col]}${isWhitePiece ? 4 : 5}`)
            }
            
            const rowWhite = 4;
            const rowBlack = 5;
            this.checkdDiagonals({col, isWhitePiece, rowWhite, rowBlack, possiblePositions}) 
        }
        
        if(row === ((isWhitePiece) ? 4 : 5)){
            if (!this.checkPieceInFront({row, col, isWhitePiece})){
                possiblePositions.push(`${numberToAlphabet[col]}${isWhitePiece ? 5 : 4}`)
            }
            
            const rowWhite = 5;
            const rowBlack = 4;
            this.checkdDiagonals({col, isWhitePiece, rowWhite, rowBlack, possiblePositions})
        }
        
        if (row === ((isWhitePiece) ? 5 : 4)){
            if (!this.checkPieceInFront({row, col, isWhitePiece})){
                possiblePositions.push(`${numberToAlphabet[col]}${isWhitePiece ? 6 : 3}`)
            }
            const rowWhite = 6;
            const rowBlack = 3;
            this.checkdDiagonals({col, isWhitePiece, rowWhite, rowBlack, possiblePositions})
        }
        
        if (row === ((isWhitePiece) ? 6 : 3)){
            if (!this.checkPieceInFront({row, col, isWhitePiece})){
                possiblePositions.push(`${numberToAlphabet[col]}${isWhitePiece ? 7 : 2}`)
            }
            
            const rowWhite = 7;
            const rowBlack = 2;
            this.checkdDiagonals({col, isWhitePiece, rowWhite, rowBlack, possiblePositions})
        }
        
        if (row === ((isWhitePiece) ? 7 : 2)){
            if (!this.checkPieceInFront({row, col, isWhitePiece})){
                possiblePositions.push(`${numberToAlphabet[col]}${isWhitePiece ? 8 : 1}`)
            }
            
            const rowWhite = 8;
            const rowBlack = 1;
            this.checkdDiagonals({col, isWhitePiece, rowWhite, rowBlack, possiblePositions})
        }

        for (let position of possiblePositions){
            let box = document.querySelector(`#${position}`)
            box.classList.add('possible-square');
        }

        console.log(possiblePositions);
        // this.resetPossibleSolutions()
    },

    checkdDiagonals({col, isWhitePiece, rowWhite, rowBlack, possiblePositions}){
        const left = col - 1
        const right = col + 1

        const diagLeft = `${numberToAlphabet[left]}${isWhitePiece ?  rowWhite : rowBlack}`;
        const diagRight = `${numberToAlphabet[right]}${isWhitePiece ? rowWhite : rowBlack}`;

        const diagleftBox = document.querySelector(`#${diagLeft}`)
        const diagrightBox = document.querySelector(`#${diagRight}`)

        const diagleftPiece = diagleftBox?.querySelector('.piece') ?? null;
        const diagrightPiece = diagrightBox?.querySelector('.piece') ?? null;

        if (isWhitePiece){
            if (diagleftPiece){
                let pieceType = diagleftPiece.getAttribute('piece-type')
                if (!playerTurn.isWhitePiece(pieceType)){
                    possiblePositions.push(diagLeft)
                };
            }
            if (diagrightPiece){
                let pieceType = diagrightPiece.getAttribute('piece-type')
                if (!playerTurn.isWhitePiece(pieceType)){
                    possiblePositions.push(diagRight)
                };
            }
        } 
        else{
            if (diagleftPiece){
                let pieceType = diagleftPiece.getAttribute('piece-type')
                if (playerTurn.isWhitePiece(pieceType)){
                    possiblePositions.push(diagLeft)
                };
            }
            if (diagrightPiece){
                let pieceType = diagrightPiece.getAttribute('piece-type')
                if (playerTurn.isWhitePiece(pieceType)){
                    possiblePositions.push(diagRight)
                };
            }
        }

    },

    checkPieceInFront({row, col, isWhitePiece}){
        const rowWhite = row + 1;
        const rowBlack = row - 1
        const front = `${numberToAlphabet[col]}${isWhitePiece ?  rowWhite : rowBlack}`;
        const frontBox = document.querySelector(`#${front}`);
        const frontPiece = frontBox?.querySelector('.piece');

        if (frontPiece){
            return true
        }

        else{
            return false;
        }
    },

    possiblePositions : [],

    getPossiblePositions(){
        return this.possiblePositions;
    },

    resetPossibleSolutions(){
        this.possiblePositions = []
    }
}