import {piecesPosition} from '../config/piecesPosition.js';
import {piecesImages} from '../config/piecesImages.js'
import {handlePiecesEvents} from '../services/handlePiecesEvents.js'
import {game} from '../config/game.js'

let board = document.querySelector('.grid')

export const boardRender = {
    piecesEventListeners : {},
    renderBoard(){
        this.createBoard();
        this.renderpieces();
        this.addPiecesEventListeners();
    },

    createBoard(){
        let state = true
        let innerState = state;

        const obj = {
            1 : 'a',
            2 : 'b',
            3 : 'c',
            4 : 'd',
            5 : 'e',
            6 : 'f',
            7 : 'g',
            8 : 'h'
        }

        for (let i = 1; i <= 8; i++){
            for (let j = 8; j >= 1; j--){
                let square = document.createElement('div');
                let squareText = document.createElement('p');
                squareText.textContent = `${obj[i]}${j}`
                squareText.classList.add('show-piece-text')
                square.id = `${obj[i]}${j}` 
                square.classList.add('piece-box')
                square.appendChild(squareText)
                if (innerState){
                    square.classList.add('white');
                    innerState = !innerState;
                }
                else{
                    square.classList.add('black');
                    innerState = !innerState;
                }
                board.appendChild(square);
            }
            state = !state;
            innerState = state;
        }
    },

    renderpieces(){
        for (const position in piecesPosition){
            let piece = document.createElement('img');
            const pieceType = piecesPosition[position]
            piece.classList.add('piece')
            piece.src = piecesImages[piecesPosition[position]]
            piece.setAttribute('piece-type', pieceType)
            document.querySelector(`#${position}`).appendChild(piece);
        }       
    },

    addPiecesEventListeners(){
        const pieceBoxes = document.querySelectorAll('.piece-box')
            pieceBoxes.forEach(pieceBox => {
            let piece = pieceBox.querySelector('.piece')
            let pieceType = piece?.getAttribute('piece-type') ?? null
            const pieceBoxId = pieceBox.getAttribute('id');
            pieceBox.setAttribute('is-selected', false);


            this.piecesEventListeners[pieceBoxId] = {
                'click' : () => {
                    handlePiecesEvents.handlePieceClick({pieceType, pieceBox, pieceBoxes, pieceBoxId})
                }
            }

            pieceBox.addEventListener('click', this.piecesEventListeners[pieceBoxId]['click'])
            // pieceBox.addEventListener('mouseenter', handlePieceClick)
            // pieceBox.addEventListener('mouseleave', handlePieceClick)
        })
    },

    updateBoard({pieceBoxId, boxClicked}){
        if(pieceBoxId !== boxClicked){
            game[pieceBoxId] = game[boxClicked]
            game[boxClicked] = null
            console.log(game);
        }
        
        {// let piece;
        // for (const position in game){
        //     if (position === boxClicked){
        //         let box = document.querySelector(`#${boxClicked}`);
        //         piece = box.childNodes[1]
        //         console.log(piece);
        //         piece.remove()
        //     }  
        //     if (position === pieceBoxId){
        //         let box = document.querySelector(`#${pieceBoxId}`);
        //         let piece2 = box?.childNodes[1] ?? null
        //         console.log(piece2);
        //         if(piece2 === null){
        //             box.appendChild(piece)
        //         }
        //         else{
        //             piece2.remove()
        //             box.appendChild(piece)
        //         }
        //     }
        // }
        }

        for (let position in game){
            if (position === boxClicked){
                document.querySelector(`#${boxClicked}`).querySelector('.piece').remove()
            }

            if (game[position] !== null){
                const box = document.querySelector(`#${position}`);
                const piece = box?.querySelector('.piece') ?? null
                const newPiece = document.createElement('img')
                newPiece.classList.add('piece')
                newPiece.src = piecesImages[game[position]];

                if(piece){
                    piece.src = piecesImages[game[position]]
                    piece.setAttribute('piece-type', game[position])
                }else{
                    box.appendChild(newPiece)
                    newPiece.setAttribute('piece-type', game[position])
                }
            }            
        }
        this.resetPiecesEventListeners()
    },

    
    resetPiecesEventListeners(){
        document.querySelectorAll('.piece-box').forEach(pieceBox => {
            const pieceBoxId = pieceBox.getAttribute('id');
            pieceBox.removeEventListener('click', this.piecesEventListeners[pieceBoxId]['click'])
        })
    }
}