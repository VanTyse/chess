import pawn from './pawn.js';
import rook from './rook.js';
import bishop from './bishop.js'
import queen from './queen.js';
import knight from './knight.js';
import king from './king.js';
import { playerTurn } from '../playerTurn.js';
import { checkmate } from '../checkmate.js';

export const determinePiece = {
    getCurrentDeterminations({ pieceType, pieceBoxId, isWhitePiece }, game){
        if (pieceType === 'white_pawn' || pieceType === 'black_pawn'){
            this.determinePawn({pieceBoxId, isWhitePiece}, game);
        }

        if (pieceType === 'white_bishop' || pieceType === 'black_bishop'){
            this.determineBishop({pieceBoxId, isWhitePiece}, game)
        }

        if (pieceType === 'white_rook' || pieceType === 'black_rook'){
            this.determineRook({pieceBoxId, isWhitePiece}, game)
        }

        if (pieceType === 'white_queen' || pieceType === 'black_queen'){
            this.determineQueen({pieceBoxId, isWhitePiece}, game)
        }

        if (pieceType === 'white_knight' || pieceType === 'black_knight'){
            this.determineKnight({pieceBoxId, isWhitePiece}, game)
        }

        if (pieceType === 'white_king' || pieceType === 'black_king'){
            this.determineKing({pieceBoxId, isWhitePiece}, game)
        }
    },

    
    getPotentialDeterminations(game){
        let potentialDeterminations = [];
        for (let position in game){
            if (game[position] !== null){
                const pieceType = game[position];
                const pieceBoxId = position;
                const isWhitePiece = playerTurn.isWhitePiece(pieceType);
                if (pieceType === 'white_pawn' || pieceType === 'black_pawn'){
                    this.determinePawn({pieceBoxId, isWhitePiece}, game);
                    this.fillingPotentialDeterminations(potentialDeterminations)
                    this.resetPossibleSolutions()
                }
        
                if (pieceType === 'white_bishop' || pieceType === 'black_bishop'){
                    this.determineBishop({pieceBoxId, isWhitePiece}, game)
                    this.fillingPotentialDeterminations(potentialDeterminations)
                    this.resetPossibleSolutions()
                }
        
                if (pieceType === 'white_rook' || pieceType === 'black_rook'){
                    this.determineRook({pieceBoxId, isWhitePiece}, game)
                    this.fillingPotentialDeterminations(potentialDeterminations)
                    this.resetPossibleSolutions()
                }
        
                if (pieceType === 'white_queen' || pieceType === 'black_queen'){
                    this.determineQueen({pieceBoxId, isWhitePiece}, game)
                    this.fillingPotentialDeterminations(potentialDeterminations)
                    this.resetPossibleSolutions()
                }
        
                if (pieceType === 'white_knight' || pieceType === 'black_knight'){
                    this.determineKnight({pieceBoxId, isWhitePiece}, game)
                    this.fillingPotentialDeterminations(potentialDeterminations)
                    this.resetPossibleSolutions()
                }
        
                if (pieceType === 'white_king' || pieceType === 'black_king'){
                    this.determineKing({pieceBoxId, isWhitePiece}, game)
                    this.fillingPotentialDeterminations(potentialDeterminations)
                    this.resetPossibleSolutions()
                }
            }
        }
        this.potentialDeterminations = potentialDeterminations    
        checkmate.isCheck()
        console.log(this.potentialDeterminations.sort());
        return potentialDeterminations;
    },

    possiblePositions : [],
    potentialDeterminations : [],

    fillingPotentialDeterminations(potentialDeterminations){
        for (let i = 0; i < this.possiblePositions.length; i++){
            if (!potentialDeterminations.includes(this.possiblePositions[i])){
                potentialDeterminations.push(this.possiblePositions[i])
            }
        }
    },
    resetPotentialDeterminations(){
        this.potentialDeterminations = []
    },

    setPossiblePositions(array){
        this.possiblePositions = [...array]
    },

    displayPossibleSquares(){
        for (let position of this.possiblePositions){
            let box = document.querySelector(`#${position}`)
            box.classList.add('possible-square');
        }
    },
    ...pawn,
    ...bishop,
    ...rook,
    ...queen,
    ...knight,
    ...king,
}