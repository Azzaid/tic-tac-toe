class TicTacToe {
    constructor() {
        this.field = [[null,null,null],[null,null,null],[null,null,null]];
        this.currentPlayerSymbol = "x";
        this.symbolAmount = 0;
        this.winner = null;
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

    }

    getCurrentPlayerSymbol() {
        return(this.currentPlayerSymbol);
    }

    nextTurn(rowIndex, columnIndex) {
        console.log("put " + this.currentPlayerSymbol + " into " + rowIndex + " " + columnIndex + " where " + this.field[rowIndex][columnIndex]);
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;

            this.Row0 = (this.field[0][1]!=null && this.field[0][1]==this.field[0][0] && this.field[0][1]==this.field[0][2]);
            this.Row1 = (this.field[1][1]!=null && this.field[1][1]==this.field[1][0] && this.field[1][1]==this.field[1][2]);
            this.Row2 = (this.field[2][1]!=null && this.field[2][1]==this.field[2][0] && this.field[2][1]==this.field[2][2]);
            this.Col0 = (this.field[1][0]!=null && this.field[1][0]==this.field[0][0] && this.field[1][0]==this.field[2][0]);
            this.Col1 = (this.field[1][1]!=null && this.field[1][1]==this.field[0][1] && this.field[1][1]==this.field[2][1]);
            this.Col2 = (this.field[1][2]!=null && this.field[1][2]==this.field[0][2] && this.field[1][2]==this.field[2][2]);
            this.Diag1 = (this.field[1][1]!=null && this.field[1][1]==this.field[0][0] && this.field[1][1]==this.field[2][2]);
            this.Diag2 = (this.field[1][1]!=null && this.field[1][1]==this.field[0][2] && this.field[1][1]==this.field[2][0]);
                if (this.Row0 || this.Row1 || this.Row2 || this.Col0 || this.Col1 || this.Col2 || this.Diag1 || this.Diag2) {
                    this.winner = this.currentPlayerSymbol;
                }
                console.log(this.field);
                console.log("winner is " + this.winner);
            this.symbolAmount = this.symbolAmount + 1;
            this._isDraw = (this.symbolAmount == 9 && this.winner == null);
            this.currentPlayerSymbol = (this.currentPlayerSymbol == "x") ? "o" : "x";
        }
        console.log("now it is " + this.currentPlayerSymbol);
    }

    isFinished() {
        return(this.winner !== null || this.symbolAmount == 9 );
    }

    getWinner() {
        return(this.winner)
    }

    noMoreTurns() {
        return(this.symbolAmount == 9);
    }

    isDraw() {
        return(this._isDraw);
    }

    getFieldValue(rowIndex, colIndex) {
        return(this.field[rowIndex][colIndex]);
    }
}

module.exports = TicTacToe;
