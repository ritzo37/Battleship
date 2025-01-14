import { player1, player2 } from "./factories.js";
import "./styles.css";
function generatePlayerGrid() {
  const playerContainer = document.querySelector(".player-container");
  for (let i = 0; i < 10; i++) {
    let outerDiv = document.createElement("div");
    for (let j = 0; j < 10; j++) {
      let currCordx = i;
      let currCordy = j;
      let innerDiv = document.createElement("div");
      innerDiv.dataset.x = currCordx;
      innerDiv.dataset.y = currCordy;
      innerDiv.style.border = "2px solid black";
      innerDiv.style.height = "50px";
      innerDiv.style.width = "50px";
      outerDiv.appendChild(innerDiv);
    }
    outerDiv.style.display = "flex";
    playerContainer.appendChild(outerDiv);
  }
  playerContainer.addEventListener("click", (event) => {
    const currDivClicked = event.target;
    let x = currDivClicked.dataset.x;
    let y = currDivClicked.dataset.y;
    placeShipOnPlayerBoard(x, y);
    if (player1.getShipsPlaced() == 4) {
        placeComputerShips();
    }
  });
}

function generateComputerGrid() {
  const computerContainer = document.querySelector(".computer-container");
  for (let i = 0; i < 10; i++) {
    let outerDiv = document.createElement("div");
    for (let j = 0; j < 10; j++) {
      let currCordx = i;
      let currCordy = j;
      let innerDiv = document.createElement("div");
      innerDiv.dataset.x = currCordx;
      innerDiv.dataset.y = currCordy;
      innerDiv.style.border = "2px solid black";
      innerDiv.style.height = "50px";
      innerDiv.style.width = "50px";
      outerDiv.appendChild(innerDiv);
    }
    outerDiv.style.display = "flex";
    computerContainer.appendChild(outerDiv);
   
  }
}

let indx = 0;
function placeShipOnPlayerBoard(x, y) {
  console.log(indx);
  const shipPlacementCheck = player1.placeShip(x, y, 4, indx);
  y = parseInt(y);
  x = parseInt(x);
  if (shipPlacementCheck) {  
    indx++;
    for (let i = y; i < y + 4; i++) {
      const cell = document.querySelector(
        `.player-container [data-x="${x}"][data-y="${i}"]`
      );
      cell.style.backgroundColor = "red";
    }
  }
}

 function placeComputerShips() {
  for (let i = 0; i < 4; i++) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    while (!player2.placeShip(x, y, 4, i)) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
    for (let j = y; j < y + 4; j++) {
      const cell = document.querySelector(
        `.computer-container [data-x="${x}"][data-y="${j}"]`
      );
      cell.style.backgroundColor = "aqua";
    }
  }

  const startBtn = document.querySelector(".start-btn");
  startBtn.disabled = false ;
}

function gameController() {
    let activePlayer = player1 ;
    let gameStatus = false ;
    return {
        getActivePlayer() {
            return activePlayer ;
        },
        changeActivePLayer() {
           if (activePlayer == player1) {
               activePlayer = player2 ;
           }
           else {
               activePlayer = player1 ;
           }
        },
        getGameStatus() {
            return gameStatus ;
        },
        changeGameStatus() {
            gameStatus = !gameStatus ;     
        }
    }
}

function gameFlow() {
     return  {
         playComputerTurn() {
          let x = Math.floor(Math.random() * 10);
          let y = Math.floor(Math.random() * 10);
          while (player1.hitCordinateCheck(x,y)) {
              x = Math.floor(Math.random() * 10) ;
              y = Math.floor(Math.random() * 10) ;
          }
          const messageDiv = document.querySelector('.message-div');
          player1.markCordinate(x,y);
            if (player1.isShipCell(x,y)) {
              messageDiv.textContent =  "Computer just hit your ship !";
          }
            else {
             messageDiv.textContent = "Computer missed the shot !";
         }
         const cell = document.querySelector(
          `.player-container [data-x="${x}"][data-y="${y}"]`
        );
        cell.textContent = "H";
        } ,
        checkGameOver(player) {
            const playerBoard = player.getBoard();
            let shunkShipCnt = 0 ;
            let markedShips = new Set() ;
            for (let i = 0 ; i<10 ;i ++) {
               for (let j = 0 ; j<10 ; j++) {
                    if (playerBoard[i][j].isShipCell) {
                        if (!markedShips.has(playerBoard[i][j].shipReference)) {
                             const currShip = playerBoard[i][j].shipReference;
                             if (currShip.isSunk()) shunkShipCnt += 1; 
                             markedShips.add(currShip);
                        }
                    }
               }
            }
            return (shunkShipCnt == 4) ;
        }
}  
}  



function screenController() {
    let controller = gameController();
    let game = gameFlow() ;
    const computerDivContainer = document.querySelector(".computer-container");
    const startBtn = document.querySelector(".start-btn");
    startBtn.disabled = true ;
    startBtn.addEventListener('click',()=>{
         controller.changeGameStatus("true");
         const body = document.querySelector("body");
         body.removeChild(startBtn);
         const messageDiv = document.querySelector(".message-div");
         messageDiv.textContent = "Player 1 turn !";
    });
    computerDivContainer.addEventListener('click',(event)=>{
        if (controller.getGameStatus() && controller.getActivePlayer() == player1) {
               let xCord = event.target.dataset.x ;
               let yCord = event.target.dataset.y ;
               if (!xCord || !yCord) return ;
               if (player2.hitCordinateCheck(xCord,yCord)) return ;
               player2.markCordinate(xCord,yCord);  
               const messageDiv = document.querySelector(".message-div");
               if (player2.isShipCell(xCord,yCord)) {
                   messageDiv.textContent = "You just hit computer's ship !";
               }
               else {
                    messageDiv.textContent = "You miss the computer's ship !" ;
               }
               const cell = document.querySelector(
                `.computer-container [data-x="${xCord}"][data-y="${yCord}"]`
              );
              cell.textContent = "H";  
              if (game.checkGameOver(player2)) {
                   messageDiv.textContent = "You won the game!" ;
                   controller.changeGameStatus();
                   return ;
              }
              controller.changeActivePLayer();
              setTimeout(()=>{
               game.playComputerTurn();   
               if (game.checkGameOver(player1)) {
                    messageDiv.textContent = "Computer just won the game ! ";
                    controller.changeGameStatus();
                    
               } 
               controller.changeActivePLayer() ;
              },0) ;
        }
        else {
           return ;
        }
    })
}


generateComputerGrid();
generatePlayerGrid();
screenController();
