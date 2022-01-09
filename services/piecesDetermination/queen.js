import { playerTurn } from "../playerTurn.js";
import { alphabetToNumber, numberToAlphabet } from "../../config/alphabetNumbers.js";

export default{
    determineQueen({pieceBoxId, isWhitePiece}){
        this.determineRook({pieceBoxId, isWhitePiece})
        this.determineBishop({pieceBoxId, isWhitePiece})
    }
}