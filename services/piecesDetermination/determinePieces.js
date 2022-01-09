import pawn from './pawn.js';
import rook from './rook.js';
import bishop from './bishop.js'
import queen from './queen.js';
import knight from './knight.js';
import king from './king.js';
import { playerTurn } from '../playerTurn.js';

export const determinePiece = {
    determineCurrentPositions({ pieceType, pieceBoxId, isWhitePiece }){
        if (pieceType === 'white_pawn' || pieceType === 'black_pawn'){
            this.determinePawn({pieceBoxId, isWhitePiece});
        }

        if (pieceType === 'white_bishop' || pieceType === 'black_bishop'){
            this.determineBishop({pieceBoxId, isWhitePiece})
        }

        if (pieceType === 'white_rook' || pieceType === 'black_rook'){
            this.determineRook({pieceBoxId, isWhitePiece})
        }

        if (pieceType === 'white_queen' || pieceType === 'black_queen'){
            this.determineQueen({pieceBoxId, isWhitePiece})
        }

        if (pieceType === 'white_knight' || pieceType === 'black_knight'){
            this.determineKnight({pieceBoxId, isWhitePiece})
        }

        if (pieceType === 'white_king' || pieceType === 'black_king'){
            this.determineKing({pieceBoxId, isWhitePiece})
        }
        for (let position of this.possiblePositions){
            let box = document.querySelector(`#${position}`)
            box.classList.add('possible-square');
        }
    },

    getPotentialDeterminations(){
        const pieceBoxes = document.querySelectorAll('.piece-box')
        pieceBoxes.forEach( pieceBox => {
            let piece = pieceBox?.querySelector('.piece') ?? null
            let pieceBoxId = pieceBox.getAttribute('id');
            if (piece){
                const pieceType = piece.getAttribute('piece-type');
                const isWhitePiece = playerTurn.isWhitePiece(pieceType);
                if (pieceType === 'white_pawn' || pieceType === 'black_pawn'){
                    this.determinePawn({pieceBoxId, isWhitePiece});
                    this.fillingPotentialDeterminations()
                    this.resetPossibleSolutions()
                }
        
                if (pieceType === 'white_bishop' || pieceType === 'black_bishop'){
                    this.determineBishop({pieceBoxId, isWhitePiece})
                    this.fillingPotentialDeterminations()
                    this.resetPossibleSolutions()
                }
        
                if (pieceType === 'white_rook' || pieceType === 'black_rook'){
                    this.determineRook({pieceBoxId, isWhitePiece})
                    this.fillingPotentialDeterminations()
                    this.resetPossibleSolutions()
                }
        
                if (pieceType === 'white_queen' || pieceType === 'black_queen'){
                    this.determineQueen({pieceBoxId, isWhitePiece})
                    this.fillingPotentialDeterminations()
                    this.resetPossibleSolutions()
                }
        
                if (pieceType === 'white_knight' || pieceType === 'black_knight'){
                    this.determineKnight({pieceBoxId, isWhitePiece})
                    this.fillingPotentialDeterminations()
                    this.resetPossibleSolutions()
                }
        
                if (pieceType === 'white_king' || pieceType === 'black_king'){
                    this.determineKing({pieceBoxId, isWhitePiece})
                    this.fillingPotentialDeterminations()
                    this.resetPossibleSolutions()
                }
            }
        })
        console.log(this.potentialDeterminations.sort());
    },

    possiblePositions : [],
    potentialDeterminations : [],

    fillingPotentialDeterminations(){
        for (let i = 0; i < this.possiblePositions.length; i++){
            if (!this.potentialDeterminations.includes(this.possiblePositions[i])){
                this.potentialDeterminations.push(this.possiblePositions[i])
            }
        }
    },
    ...pawn,
    ...bishop,
    ...rook,
    ...queen,
    ...knight,
    ...king,
}