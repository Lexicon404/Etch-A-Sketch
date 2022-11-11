
function createBoard (size) {
const container = document.querySelector ("#container");
const units = container.querySelectorAll ("div");
units.forEach ((div) => div.remove());
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
container.style.border = "1px solid black"

let amount = size * size;
for (let i=0; i<amount; i++) {
        const unit = document.createElement("div");
        unit.addEventListener("mouseover",() => {
            unit.style.backgroundColor = "black"});
        unit.style.backgroundColor = "white";
        unit.classList = ("unit")
        container.appendChild (unit);
    }

}

createBoard(16);


document.querySelector ('#button').addEventListener('click', () => {
    const size = prompt ('Pick Size', '16');
    if (size < 2 || size > 100) {
        alert ('Please pick number between 2 and 100');
    } else {createBoard(size)
    };
})








// document.querySelector("#newBoard").addEventListener ("onClick", () => {
//     let size = prompt (`Please enter grid size, '16'`)
// })