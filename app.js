


var anyRow = matrix => {
    var res = false
    for (let i=0; i<matrix.length; i++){
        var sum = 0;
        for (let j=0; j< matrix.length; j++){
            sum += matrix[i][j];
        }
        if (sum === 3) res = true;
    }
    return res;
}


var anyCol = matrix => {
    var res = false
    for (let i=0; i<matrix.length; i++){
        var sum = 0;
        for (let j=0; j< matrix.length; j++){
            sum += matrix[j][i];
        }
        if (sum === 3) res = true;
    }
    return res;
}

var majorDiag = matrix => {
    var res = false
    var sum = 0;
    for (let i=0; i<matrix.length; i++){
        for (let j=0; j< matrix.length; j++){
            if (i === j){
                sum += matrix[i][j];
            }
        }
        if (sum === 3) res = true;
    }
    return res;
}

var minorDiag = matrix => {
    var res = false;
    var sum = 0;
    for (let i=0; i<matrix.length; i++){
        for (let j=0; j< matrix.length; j++){
            if ((i + j) === 2){
                sum += matrix[i][j];
            }
        }
        if (sum === 3) res = true;
    }
    return res;
}

var verif = matrix => {
    if (anyCol(matrix) || anyRow(matrix) || majorDiag(matrix) || minorDiag(matrix)){
        return true
    } else {
        return false
    }
}

var TicTacToe = function () {
    this.matrixCross = [[0,0,0],[0,0,0],[0,0,0]];
    this.matrixZero = [[0,0,0],[0,0,0],[0,0,0]];
    this.count = 0;
    this.images =[];

} 

TicTacToe.prototype.append = function (x){
    this.count ++;
    if(this.count < 10){
        if (this.count%2 && !document.getElementById(`s${x}`).innerHTML){
            document.getElementById(`s${x}`).innerHTML = `<img id ="i${x}" src ="./cross.png"></img>`
            this.images.push(`i${x}`)
        } else if (!(this.count%2) && !document.getElementById(`s${x}`).innerHTML){
            document.getElementById(`s${x}`).innerHTML = `<img id ="i${x}" src ="./zero.jpg"></img>`
            this.images.push(`i${x}`)
        }
    
        if (this.count%2 && x === 1){
            this.matrixCross[0][0] = 1;
        } else if(this.count%2 && x === 2){
            this.matrixCross[0][1] = 1;
        }
        else if(this.count%2 && x === 3){
            this.matrixCross[0][2] = 1;
        }
        else if(this.count%2 && x === 4){
            this.matrixCross[1][0] = 1;
        }
        else if(this.count%2 && x === 5){
            this.matrixCross[1][1] = 1;
        }
        else if(this.count%2 && x === 6){
            this.matrixCross[1][2] = 1;
        }
        else if(this.count%2 && x === 7){
            this.matrixCross[2][0] = 1;
        }
        else if(this.count%2 && x === 8){
            this.matrixCross[2][1] = 1;
        }
        else if(this.count%2 && x === 9){
            this.matrixCross[2][2] = 1;
        } 
        else if (!(this.count%2) && x === 1){
            this.matrixZero[0][0] = 1;
        } else if(!(this.count%2) && x === 2){
            this.matrixZero[0][1] = 1;
        }
        else if(!(this.count%2) && x === 3){
            this.matrixZero[0][2] = 1;
        }
        else if(!(this.count%2) && x === 4){
            this.matrixZero[1][0] = 1;
        }
        else if(!(this.count%2) && x === 5){
            this.matrixZero[1][1] = 1;
        }
        else if(!(this.count%2)&& x === 6){
            this.matrixZero[1][2] = 1;
        }
        else if(!(this.count%2) && x === 7){
            this.matrixZero[2][0] = 1;
        }
        else if(!(this.count%2) && x === 8){
            this.matrixZero[2][1] = 1;
        }
        else if(!(this.count%2) && x === 9){
            this.matrixZero[2][2] = 1;
        }
        console.log(this.matrixCross)
        console.log(this.matrixZero)
        if( verif(this.matrixCross)){
            setTimeout (
                function(){
                    alert ("The player X win")
                },100
            )
        } 
        else if( verif(this.matrixZero)){
            setTimeout (
                function(){
                    alert ("The player O win")
                },100
            )
        }
    } 
   
}
TicTacToe.prototype.reset = function (){
    this.matrixCross = [[0,0,0],[0,0,0],[0,0,0]];
    this.matrixZero = [[0,0,0],[0,0,0],[0,0,0]];
    this.count = 0;
    this.images.forEach(element => {
        document.getElementById(element).remove();
    });
    this.images =[];
}
var letStart = new TicTacToe();
