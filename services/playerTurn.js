export const playerTurn = {
    whosTurn : 'white',

    get isWhiteTurn(){
        return this.whosTurn === 'white'
    },
    
    get isBlackTurn(){
        return this.whosTurn === 'black'
    },

    changeTurn(){
        if (this.isWhiteTurn){
            this.whosTurn = 'black'
        }
        else if (this.isBlackTurn){
            this.whosTurn = 'white'
        }
    },

    isWrongTurn(pieceType){
        if (pieceType === null) return;
        if (this.isBlackPiece(pieceType) && this.whosTurn === 'white'){
            return true
        }else if (this.isWhitePiece(pieceType) && this.whosTurn === 'black'){
            return true
        }
        else{
            return false
        }
    },

    isBlackPiece(pieceType){
        let pieceColor = pieceType.slice(0, 5);
        return pieceColor === 'black';
    },
    
    isWhitePiece(pieceType){
        let pieceColor = pieceType.slice(0, 5);
        return pieceColor === 'white';
    }
}