const form1 = document.getElementById("unit_type");
const optionIndex = form1.getElementsByTagName("option")
const mountedElite = optionIndex[1].value;
const elite = optionIndex[2].value;
const heartguards = optionIndex[3].value;
const warrior = optionIndex[4].value;
const levy = optionIndex[5].value;
const div2 = document.querySelector(".second");
const dices = document.getElementsByClassName('dice');
const hits = document.getElementById("hits");
const misses = document.getElementById("misses");
const numberOf = document.getElementById("numberOf");
const numberOfTwo = document.getElementById("numberOfAdd");

function generateDice() {
    let one = parseFloat(form1.value, 10);
    let two = parseInt(numberOf.value, 10);
    let three = parseInt(numberOfAdd.value, 10);
    let diceNumber = one * two + three;
    console.log("Dice number: " + diceNumber + " (" + one + " x " + two + " + " + three + ")");
    div2.innerHTML = "";
    hits.innerHTML = "0";
    misses.innerHTML = "0";

    for (i = 1; i <= diceNumber; i++) {
        let dice = document.createElement("p")
        dice.appendChild(document.createTextNode(0));
        div2.appendChild(dice);
        dice.setAttribute("class", "dice");
    }
}

function rollDice() {
    let defence = document.getElementById("numberOfDeff").value;
    parseInt(hits.innerText, 10);
    parseInt(misses.innerText, 10);
    hits.innerText = 0;
    misses.innerText = 0;
    for (i = 0; i < dices.length; i++) {
        min = Math.ceil(1);
        max = Math.floor(6);
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        dices[i].innerHTML = result;
        if (result >= defence) {
            dices[i].setAttribute("class", "dice green");
            hits.innerText ++;
        } else {
            dices[i].setAttribute("class", "dice red");
            misses.innerText ++;
        }
    }
}

closeDiv = () => {
    let fourthWindow = document.getElementById("fourth");
    fourthWindow.setAttribute("class", "none");

}


function saveDicesToStorage() {
    const savedDices = div2.innerHTML;
    localStorage.setItem("savedDices", savedDices);
    localStorage.setItem("hitsP", hits.innerText);
    localStorage.setItem("missesP", misses.innerText);
    console.log(savedDices);
}

function getDicesFromStorage() {
    div2.innerHTML = localStorage.getItem("savedDices");
    hits.innerText = localStorage.getItem("hitsP");
    misses.innerText = localStorage.getItem("missesP");
}