// Fase di preparazione

// Recupero gli elementi dal DOM
const gridElement = document.getElementById("grid");
console.log(gridElement);

const buttonElement = document.querySelector("button");
console.log(buttonElement);

// Variabili
const rows = 10;
const cols = 10;
const totalCells = rows * cols;

// Funzioni

// Funzione per creare un nodo
function createNode(element, className, content) {
    const node = document.createElement(element);
    node.classList.add(className);
    node.append(content);
    return node;
}

// Fase di gestione eventi e di elaborazione

// Aggiungo un EventListener all'elemento button
buttonElement.addEventListener("click", function () {
    // Per il numero di celle desiderate...
    for (let i = 0; i < totalCells; i++) {
        // Utilizzo la funzione per creare una cella
        const cell = createNode("div", "cell", i + 1);
        // Aggiungo un EventListener alla cella
        cell.addEventListener("click", function () {
            cell.classList.toggle("clicked");
            // Stampo il numero della cella in console
            console.log(cell.innerText);
        });
        // Aggiungo la cella nel DOM
        gridElement.appendChild(cell);
    }
});