import { player1, player2 } from "./factories.js";
import "./styles.css";

function computerIntelligence() {
  return {
    prevHitStatus: 0,
    onGoingHit: 0,
    startingCords: [-1, -1],
    startingCordsFound: 0,
    prevCordsHit: [-1, -1],
  };
}

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
  let length = [5, 4, 3, 2];
  return {
    placeShipOnPlayerBoard(grid) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; ) {
          if (grid[i][j] != -1) {
            player1.placeShip(i, j, grid[i][j]);
            for (let coln = j; coln < j + length[grid[i][j]]; coln++) {
              const cell = document.querySelector(
                `.player-container [data-x="${i}"][data-y="${coln}"]`
              );
              cell.style.backgroundColor = "red";
            }
            j += length[grid[i][j]];
          } else {
            j++;
          }
        }
      }
      return;
    },

    placeComputerShips() {
      for (let i = 0; i < 4; i++) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        while (!player2.placeShip(x, y, i)) {
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
    playComputerTurn(computerBrain) {
      if (computerBrain.onGoingHit) {
        if (computerBrain.startingCordsFound) {
          let [x, y] = computerBrain.startingCords;
          while (player1.hitCordinateCheck(x, y + 1)) {
            y += 1;
            if (y == 10) {
              computerBrain.onGoingHit = 0;
              computerBrain.startingCordsFound = 0;
              return this.playComputerTurn(computerBrain);
            }
          }
          return [x, y + 1];
        } else {
          if (!computerBrain.prevHitStatus) {
            computerBrain.startingCordsFound = 1;
            let [prevX, prevY] = computerBrain.prevCordsHit;
            computerBrain.startingCords = [prevX, prevY + 1];
            return this.playComputerTurn(computerBrain);
          }
          let [prevX, prevY] = computerBrain.prevCordsHit;
          if (prevY == 0) {
            computerBrain.startingCordsFound = 1;
            computerBrain.startingCords = [prevX, prevY];
            return this.playComputerTurn(computerBrain);
          }
          while (player1.hitCordinateCheck(prevX, prevY - 1)) {
            prevY -= 1;
            if (prevY == 0) {
              computerBrain.startingCordsFound = 1;
              computerBrain.startingCords = [prevX, prevY + 1];
              return this.playComputerTurn(computerBrain);
            }
          }
          return [prevX, prevY - 1];
        }
      } else {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        while (player1.hitCordinateCheck(x, y)) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        }
        return [x, y];
      }
    },
    checkGameOver(player) {
      return player.getSunkShipCnt() == 4;
    },
  };
}

function dialogManger(controller, placer) {
  const dialogBox = document.querySelector(".shipPlacerDialog");
  const dialogHeading = document.createElement("div");
  dialogHeading.textContent = "Please Drag and Drop the ships to place them !";
  dialogHeading.classList.add("dialog-heading");
  const container = document.createElement("div");
  const placerGrid = document.createElement("div");
  const shipsGrid = document.createElement("div");
  const grid = [];
  let placedShipsSet = new Set();
  for (let i = 0; i < 10; i++) {
    let currRow = [];
    for (let j = 0; j < 10; j++) {
      currRow.push(-1);
    }
    grid.push(currRow);
  }

  shipsGrid.id = "shipsGrid";
  shipsGrid.style.display = "flex";
  shipsGrid.style.flexDirection = "column";
  shipsGrid.style.gap = "20px";
  shipsGrid.style.height = "550px";
  shipsGrid.style.width = "260px";
  shipsGrid.style.border = "2px solid black";
  container.style.position = "relative";
  let startShipLength = 5;
  let startTop = 0;
  for (let i = 0; i < 4; i++) {
    const currShip = document.createElement("div");
    currShip.id = `ship-${i}`;
    currShip.draggable = true;
    currShip.style.position = "absolute";
    currShip.style.top = `${startTop}px`;
    currShip.addEventListener("dragstart", (e) => {
      e.dataTransfer.setDragImage(currShip, 0, 0);
      e.dataTransfer.setData("text/plain", e.target.id);
    });
    startTop += 100;
    currShip.dataset.width = `${startShipLength}`;
    currShip.dataset.indx = i;
    let currWidth = startShipLength * 50;
    currShip.style.width = `${currWidth}px`;
    currShip.style.borderWidth = "2px";
    currShip.style.height = "50px";
    currShip.style.backgroundColor = "red";
    currShip.style.border = "2px solid black";
    startShipLength--;
    shipsGrid.appendChild(currShip);
  }
  placerGrid.id = "placerGrid";
  for (let i = 0; i < 10; i++) {
    let outerDiv = document.createElement("div");
    for (let j = 0; j < 10; j++) {
      let currCordx = i;
      let currCordy = j;
      let innerDiv = document.createElement("div");
      innerDiv.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
      innerDiv.addEventListener("drop", (e) => {
        e.preventDefault();
        let cordX = parseInt(innerDiv.offsetLeft);
        let cordY = parseInt(innerDiv.offsetTop);
        const divDraggedid = e.dataTransfer.getData("text");
        if (!divDraggedid) return;
        const divSelected = document.querySelector(`#${divDraggedid}`);
        const indx = parseInt(divSelected.dataset.indx);
        const currWidth = parseInt(divSelected.dataset.width);
        if (j + currWidth - 1 >= 10) return;
        let alreadyPlacedShipCheck = false;
        for (let currColn = j; currColn < j + currWidth; currColn++) {
          if (grid[i][currColn] != -1) alreadyPlacedShipCheck = true;
        }
        if (alreadyPlacedShipCheck) {
          return;
        }
        if (placedShipsSet.has(indx)) {
          for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
              if (grid[i][j] == indx) {
                grid[i][j] = -1;
              }
            }
          }
        }
        placedShipsSet.add(indx);
        for (let currColn = j; currColn < j + currWidth; currColn++) {
          grid[i][currColn] = indx;
        }
        divSelected.style.left = `${cordX}px`;
        divSelected.style.top = `${cordY}px`;
      });
      innerDiv.dataset.x = currCordx;
      innerDiv.dataset.y = currCordy;
      innerDiv.style.border = "2px solid black";
      innerDiv.style.height = "50px";
      innerDiv.style.width = "50px";
      outerDiv.appendChild(innerDiv);
    }
    outerDiv.style.display = "flex";
    placerGrid.appendChild(outerDiv);
  }
  container.appendChild(placerGrid);
  container.appendChild(shipsGrid);
  container.style.display = "flex";
  container.style.gap = "50px";
  dialogBox.appendChild(dialogHeading);
  dialogBox.appendChild(container);
  const closeButton = document.createElement("button");
  const dialogMessageDiv = document.createElement("div");
  dialogMessageDiv.classList.add("dialog-message-div");
  closeButton.textContent = "Close";
  const gameStart = document.createElement("button");
  gameStart.textContent = "Start";
  dialogBox.appendChild(closeButton);
  closeButton.addEventListener("click", () => {
    dialogBox.close();
  });
  dialogBox.appendChild(gameStart);
  dialogBox.appendChild(dialogMessageDiv);
  gameStart.addEventListener("click", () => {
    let shipsMarked = [];
    for (let i = 0; i < 4; i++) {
      shipsMarked[i] = 0;
    }
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (grid[i][j] != -1) {
          shipsMarked[grid[i][j]] = 1;
        }
      }
    }
    let shipsPlaced = 0;
    shipsMarked.forEach((item) => {
      if (item) shipsPlaced++;
    });

    if (shipsPlaced != 4) {
      const dialogMessageDiv = document.querySelector(".dialog-message-div");
      dialogMessageDiv.textContent =
        "Please place all of your ships and then click on start !";
      return;
    }

    placer.placeShipOnPlayerBoard(grid);
    placer.placeComputerShips();
    const messageDiv = document.querySelector(".message-div");
    messageDiv.textContent = "Player 1 turn !";
    controller.changeGameStatus();
    const startBtn = document.querySelector(".start-btn");
    const restartBtn = document.querySelector(".restart-btn");
    startBtn.disabled = true;
    restartBtn.disabled = false;
    dialogBox.close();
  });
}
function screenController() {
  let controller = gameController();
  let manager = gridManager();
  let placer = gridPlacer();
  dialogManger(controller, placer);

  manager.generatePlayerGrid();
  manager.generateComputerGrid();

  const startBtn = document.querySelector(".start-btn");
  const restartBtn = document.querySelector(".restart-btn");
  restartBtn.disabled = true;
  startBtn.addEventListener("click", () => {
    if (!controller.getGameStatus()) {
      const dialogBox = document.querySelector(".shipPlacerDialog");
      dialogBox.showModal();
    }
  });

  restartBtn.addEventListener("click", () => {
    if (controller.getGameStatus()) {
      controller.changeGameStatus();
    }
    if (controller.getActivePlayer() == player2) {
      controller.changeGameStatus();
    }
    const startBtn = document.querySelector(".start-btn");
    startBtn.disabled = false;
    restartBtn.disabled = true;
    manager.clearBothGrids();
    player1.clearBoard();
    player2.clearBoard();
    const messageDiv = document.querySelector(".message-div");
    messageDiv.textContent = "";
  });

  const computerDivContainer = document.querySelector(".computer-container");
  const computerBrain = computerIntelligence();

  computerDivContainer.addEventListener("click", (event) => {
    if (controller.getGameStatus() && controller.getActivePlayer() == player1) {
      let xCord = event.target.dataset.x;
      let yCord = event.target.dataset.y;
      if (!xCord || !yCord) return;
      if (player2.hitCordinateCheck(xCord, yCord)) return;
      player2.markCordinate(xCord, yCord);
      const messageDiv = document.querySelector(".message-div");
      if (player2.isShipCell(xCord, yCord)) {
        if (player2.sunkShipCheck(xCord, yCord)) {
          let [shipXCord, shipYCord] = player2.getShipCords(xCord, yCord);
          for (
            let i = shipYCord;
            i < shipYCord + player2.getShipLength(xCord, yCord);
            i++
          ) {
            const cell = document.querySelector(
              `.computer-container [data-x="${shipXCord}"][data-y="${i}"]`
            );
            cell.style.backgroundColor = "green";
          }
          messageDiv.textContent = "You just sunk one of the computer's ship!";
        } else {
          messageDiv.textContent = "You just hit one of the computer's shipt!";
        }
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
        player1.clearBoard();
        player2.clearBoard();
        return;
      }
      controller.changeActivePLayer();
      setTimeout(() => {
        try {
          let [cordX, cordY] = controller.playComputerTurn(computerBrain);
          computerBrain.prevCordsHit = [cordX, cordY];
          const messageDiv = document.querySelector(".message-div");
          player1.markCordinate(cordX, cordY);
          if (player1.isShipCell(cordX, cordY)) {
            if (player1.sunkShipCheck(cordX, cordY)) {
              computerBrain.onGoingHit = 0;
              computerBrain.prevHitStatus = 0;
              computerBrain.prevCordsHit = [-1, -1];
              computerBrain.startingCordsFound = 0;
              messageDiv.textContent = "Computer just sank one of your ship !";
            } else {
              computerBrain.onGoingHit = 1;
              computerBrain.prevHitStatus = 1;
              computerBrain.prevCordsHit = [cordX, cordY];
              messageDiv.textContent = "Computer just hit your ship !";
            }
          } else {
            computerBrain.prevHitStatus = 0;
            messageDiv.textContent = "Computer missed the shot !";
          }
          const cell = document.querySelector(
            `.player-container [data-x="${cordX}"][data-y="${cordY}"]`
          );
          cell.textContent = "X";
          if (controller.checkGameOver(player1)) {
            messageDiv.textContent = "Computer just won the game!";
            player1.clearBoard();
            player2.clearBoard();
            controller.changeGameStatus();
          }
          controller.changeActivePLayer();
        } catch (error) {
          console.error("Error during computer turn:", error);
        }
      }, 1000);
    } else {
      return;
    }
  });
}

screenController();
