let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let winnermsg = document.querySelector("#status");
let newGameBtn = document.querySelector("#new-game");

let turn0 = true;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Horizontal
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Vertical
  [0, 4, 8],
  [2, 4, 6], // Diagonal
];

box.forEach((box) =>
  box.addEventListener("click", () => {
    console.log("box");
    if (turn0) {
      //player0
      box.innerText = "O";
      turn0 = false;
    } else {
      //playerX
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  })
);

const showWinner = (winner) => {
    winnermsg.innerText = `Winner is ${winner}`;
    
}
const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let post1Value = box[pattern[0]].innerText;
    let post2Value = box[pattern[1]].innerText;
    let post3Value = box[pattern[2]].innerText;

    if (post1Value !== "" && post2Value !== "" && post3Value !== "") {
      if (post1Value === post2Value && post2Value === post3Value) {
        box[pattern[0]].style.backgroundColor = "green";
        showWinner(post1Value);
      }
    }
  }
};
