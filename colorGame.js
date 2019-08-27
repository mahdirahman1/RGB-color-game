var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newgame = document.querySelector("button");
var modebtn = document.querySelectorAll(".mode");


init();

function setupButtons(){
    for(var i=0; i < modebtn.length; i++){
        modebtn[i].addEventListener("click",function(){
            modebtn[0].classList.remove("selected");
            modebtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
    
        })
    }

    newgame.addEventListener("click", function(){
        reset();    
    })
}

function setupSquares(){
    for(var i=0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    
        //add click listeners to sqaures
        squares[i].addEventListener("click", function(){
            var userPick = this.style.backgroundColor;
            if(userPick === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(pickedColor);
                h1.style.background = pickedColor;
                newgame.textContent = "Play Again";
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    
    }
}

function init(){
    setupButtons();
    setupSquares();
    reset();
}


function reset(){
    newgame.textContent = "New Colors";
    h1.style.background = "#6657a1";
    colors = generateColors(numSquares);
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    for(var i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
       
    }
}



function pickColor(){
    var index = Math.floor(Math.random()*colors.length);
    return colors[index];
}

function changeColors(color){
    for(var i =0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}


function generateColors(number){
    var arr = [];
    for(var i=0; i < number; i++){
        arr.push(generateRandomColor());
    }
    return arr;
}

function generateRandomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return ("rgb(" + r + ", "+g+", "+b+")");
}