import { player1, player2 } from "./factories.js";
import "./styles.css";

function gridManager() {
  return {
    generatePlayerGrid() {
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
    },
    generateComputerGrid() {
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
    },
    clearBothGrids() {
      for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
          const cell1 = document.querySelector(
            `.player-container [data-x="${x}"][data-y="${y}"]`
          );
          const cell2 = document.querySelector(
            `.computer-container [data-x="${x}"][data-y="${y}"]`
          );
          cell1.style.backgroundColor = "white";
          cell2.style.backgroundColor = "white";
          cell1.textContent = "";
          cell2.textContent = "";
        }
      }
    },
  };
}

function gridPlacer() {
  return {
    placeShipOnPlayerBoard() {
      for (let i = 0; i < 4; i++) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        while (!player1.placeShip(x, y, 4, i)) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        }
        for (let j = y; j < y + 4; j++) {
          const cell = document.querySelector(
            `.player-container [data-x="${x}"][data-y="${j}"]`
          );
          cell.style.backgroundColor = "aqua";
        }
      }
    },

    placeComputerShips() {
      for (let i = 0; i < 4; i++) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        while (!player2.placeShip(x, y, 4, i)) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        }
      }
    },
  };
}

function gameController() {
  let activePlayer = player1;
  let gameStatus = false;
  return {
    getActivePlayer() {
      return activePlayer;
    },
    changeActivePLayer() {
      if (activePlayer == player1) {
        activePlayer = player2;
      } else {
        activePlayer = player1;
      }
    },
    getGameStatus() {
      return gameStatus;
    },
    changeGameStatus() {
      gameStatus = !gameStatus;
    },
    playComputerTurn() {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      while (player1.hitCordinateCheck(x, y)) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      }
      const messageDiv = document.querySelector(".message-div");
      player1.markCordinate(x, y);
      if (player1.isShipCell(x, y)) {
        messageDiv.textContent = "Computer just hit your ship !";
      } else {
        messageDiv.textContent = "Computer missed the shot !";
      }
      const cell = document.querySelector(
        `.player-container [data-x="${x}"][data-y="${y}"]`
      );
      cell.textContent = "X";
    },
    checkGameOver(player) {
      const playerBoard = player.getBoard();
      let shunkShipCnt = 0;
      let markedShips = new Set();
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (playerBoard[i][j].isShipCell) {
            if (!markedShips.has(playerBoard[i][j].shipReference)) {
              const currShip = playerBoard[i][j].shipReference;
              if (currShip.isSunk()) shunkShipCnt += 1;
              markedShips.add(currShip);
            }
          }
        }
      }
      return shunkShipCnt == 4;
    },
  };
}

function screenController() {
  let controller = gameController();
  let manager = gridManager();
  let placer = gridPlacer();
  manager.generatePlayerGrid();
  manager.generateComputerGrid();

  const startBtn = document.querySelector(".start-btn");
  const restartBtn = document.querySelector(".restart-btn");
  startBtn.addEventListener("click", () => {
    if (!controller.getGameStatus()) {
      placer.placeShipOnPlayerBoard();
      placer.placeComputerShips();
      controller.changeGameStatus();
      const messageDiv = document.querySelector(".message-div");
      messageDiv.textContent = "Player 1 turn !";
      startBtn.disabled = true;
    }
  });

  restartBtn.addEventListener("click", () => {
    controller.changeGameStatus();
    if (controller.getActivePlayer() == player2) {
      controller.changeGameStatus();
    }
    const startBtn = document.querySelector(".start-btn");
    startBtn.disabled = false;
    manager.clearBothGrids();
    player1.clearBoard();
    player2.clearBoard();
    const messageDiv = document.querySelector(".message-div");
    messageDiv.textContent = "Player 1 turn !";
  });

  const computerDivContainer = document.querySelector(".computer-container");
  computerDivContainer.addEventListener("click", (event) => {
    if (controller.getGameStatus() && controller.getActivePlayer() == player1) {
      let xCord = event.target.dataset.x;
      let yCord = event.target.dataset.y;
      if (!xCord || !yCord) return;
      if (player2.hitCordinateCheck(xCord, yCord)) return;
      player2.markCordinate(xCord, yCord);
      const messageDiv = document.querySelector(".message-div");
      if (player2.isShipCell(xCord, yCord)) {
        messageDiv.textContent = "You just hit computer's ship !";
      } else {
        messageDiv.textContent = "You miss the computer's ship !";
      }
      const cell = document.querySelector(
        `.computer-container [data-x="${xCord}"][data-y="${yCord}"]`
      );
      cell.textContent = "X";
      if (controller.checkGameOver(player2)) {
        messageDiv.textContent = "You won the game!";
        controller.changeGameStatus();
        return;
      }
      controller.changeActivePLayer();
      setTimeout(() => {
        controller.playComputerTurn();
        if (controller.checkGameOver(player1)) {
          messageDiv.textContent = "Computer just won the game ! ";
          controller.changeGameStatus();
        }
        controller.changeActivePLayer();
      }, 1000);
    } else {
      return;
    }
  });
}

screenController();
