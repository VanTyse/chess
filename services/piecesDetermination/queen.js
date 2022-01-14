export default{
    determineQueen({pieceBoxId, isWhitePiece}, game){
        this.determineRook({pieceBoxId, isWhitePiece}, game)
        this.determineBishop({pieceBoxId, isWhitePiece}, game)
    }
}