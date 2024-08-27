// Fase di preparazione

// Recupero gli elementi dal DOM
const gridElement = document.getElementById("grid");
console.log(gridElement);

const buttonElement = document.querySelector("button");
console.log(buttonElement);

const scoreElement = document.getElementById("score");
console.log(scoreElement);

// Variabili
const rows = 10;
const cols = 10;
const totalCells = rows * cols;
let score = 0;
const totalRandomNumbers = 16;

// Funzioni

// Funzione per creare un nodo
function createNode(element, className, content) {
    const node = document.createElement(element);
    node.classList.add(className);
    node.append(content);
    return node;
}

// Funzione per generare tot numeri casuali
function generateRandomNumbers(max, totalRandomNumbers) {
    const randomNumbers = [];
    while (randomNumbers.length < totalRandomNumbers) {
        const randomNumber = Math.floor(Math.random() * max) + 1;
        if (!randomNumbers.includes(randomNumber)) randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

// Funzione per iniziare a giocare
function startGame() {
    // Svuoto l'elemento grid
    gridElement.innerHTML = "";
    // Modifico il testo dell'elemento button
    buttonElement.innerText = "Ricomincia";
    // Modifico il testo dell'elemento score
    scoreElement.innerText = `Score: ${score}`;
    // Per il numero di celle desiderate...
    for (let i = 0; i < totalCells; i++) {
        // Utilizzo la funzione per creare una cella
        const cell = createNode("div", "cell", i + 1);
        // Aggiungo un EventListener alla cella
        cell.addEventListener("click", function () {
            // Se la cella contiene la classe "clicked", esci
            if (cell.classList.contains("clicked")) return;
            // Aggiungo la classe "clicked" alla cella
            cell.classList.add("clicked");
            // Incremento lo score
            scoreElement.innerText = `Score: ${++score}`;
            // Stampo il numero della cella in console
            console.log(cell.innerText);
        });
        // Aggiungo la cella nel DOM
        gridElement.appendChild(cell);
    }
    // Utilizzo la funzione per generare tot numeri casuali
    const randomNumbers = generateRandomNumbers(totalCells, totalRandomNumbers);
    console.log(randomNumbers);
}

// Fase di gestione eventi

// Aggiungo un EventListener all'elemento button
buttonElement.addEventListener("click", startGame);