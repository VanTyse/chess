export const data = {
    isBoxClicked : false,
    
    boxClicked : null,

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
    }

}