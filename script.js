let mistake1 = document.querySelector("#rope-id");
let mistake2 = document.querySelector("#head-id");
let mistake3 = document.querySelector("#left-arm-id");
let mistake4 = document.querySelector("#belly-id");
let mistake5 = document.querySelector("#right-arm-id");
let mistake6 = document.querySelector("#left-leg-id");
let mistake7 = document.querySelector("#right-leg-id");


let random = Math.floor(Math.random()*15)
let word = ["Apple", "Banana", "Computer", "Elephant", "Sunshine", "Mountain", "Butterfly", "Happiness", "Education", "Adventure", "Umbrella", "Elephant", "Internet", "Delicious", "Beautiful"];
let selectWord = document.querySelector("#guess");
selectWord.innerText = word[random]; 
let guess = document.querySelector("#guess").innerText.toUpperCase().split("");
let button = document.querySelectorAll(".btn-class");
let guessContainer = document.querySelector(".guess-container");
let occurance = document.querySelector("#ocr");
let charCode = 65;
let mistake = 0;

for (let i = 0; i < guess.length; i++) {
    if (guess[i] != " ") {
        let span = document.createElement("span");
        span.innerText = guess[i];
        guessContainer.appendChild(span);
        span.id = `guess-word-${i}`
        span.classList.add("guess-word");
    }
}

let abc = document.querySelectorAll(".guess-word");

button.forEach(function (val, i) {
    val.addEventListener("click", function () {
        val.classList.remove("btn-class")
        val.disabled = true;
        charCode = i + 65;
        let num = 0;
        // console.log(`You pressed ${val.innerText}`);
        for (let j = 0; j < guess.length; j++) {
            if (guess[j].charCodeAt(0) === charCode) {
                num++;
                // console.log(`${guess[j]} has ${num} occurances`);
                abc[j].style.color = "unset"
            }
        }
        if (num === 0) {
            occurance.innerText = ++mistake;
            if(mistake == 1){
                mistake1.style.display = "block";
            }
            else if(mistake == 2){
                mistake2.style.display = "block";
            }
            else if(mistake == 3){
                mistake3.style.display = "block";
            }
            else if(mistake == 4){
                mistake4.style.display = "block";
            }
            else if(mistake == 5){
                mistake5.style.display = "block";
            }
            else if(mistake == 6){
                mistake6.style.display = "block";
            }
            else if(mistake == 7){
                mistake7.style.display = "block";
            }
        }

    })
});