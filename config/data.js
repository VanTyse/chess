export const data = {
    isboxClicked : false,
    
    boxClicked : null,

    changeIsBoxClicked(pieceBoxId){
        this.isboxClicked = !this.isboxClicked

        if (this.isboxClicked){
            this.boxClicked = pieceBoxId;
        }
    }

}