var numSquares = 6;
var Color = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var ColorDisplay = document.querySelector("#colorDisplay");
var alertMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

easyButton.addEventListener("click", function () {
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numSquares = 3;
    Color = generateRandomColors(numSquares);
    pickedColor = pickColor();
    ColorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (Color[i]) {
            squares[i].style.backgroundColor = Color[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function () {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares = 6;
    Color = generateRandomColors(numSquares);
    pickedColor = pickColor();
    ColorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = Color[i];

        squares[i].style.display = "block";
    }
});


resetButton.addEventListener("click", function () {
    Color = generateRandomColors(numSquares);
    pickedColor = pickColor();
    ColorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = Color[i];
    }
    h1.style.backgroundColor = "steelblue";
})

ColorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = Color[i];

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            alertMessage.textContent = "Correct!";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Try Again";
        }
        else {
            this.style.backgroundColor = "#232323"
            alertMessage.textContent = "Try Again";
        }
    })
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * Color.length);
    return Color[random];
}

function generateRandomColors(num) {
    var arr = []

    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }

    return arr
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}