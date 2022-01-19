export const data = {
    isBoxClicked : false,
    
    boxClicked : null,

    hasWhiteKingMoved : false,

    hasBlackKingMoved : false,

    changeIsBoxClicked(){
        this.isBoxClicked = !this.isBoxClicked
    },

    setBoxClicked(pieceBoxId){
        if (this.isBoxClicked){
            this.boxClicked = pieceBoxId;
        }
    },

    resetBoxClicked(){
        if (this.boxClicked){
            this.boxClicked = null
        }
    },

    setWhiteKingMoved(){
        this.hasWhiteKingMoved = true
    },

    setBlackKingMoved(){
        this.hasBlackKingMoved = true
    },

    castledAlready : {
        white : false,
        black : false,
    },

    setCastledAlready(isWhitePiece){
        this.castledAlready[isWhitePiece ? 'white' : 'black'] = true
    }
}