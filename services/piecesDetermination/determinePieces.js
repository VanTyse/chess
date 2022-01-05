import {pawn} from './pawn.js';

export const determinePiece = {
    determinePiece({ pieceType, pieceBoxId, isWhitePiece }){
        if (pieceType === 'white_pawn' || pieceType === 'black_pawn'){
            return pawn.determinePawn({pieceBoxId, isWhitePiece})
        }
    }

}