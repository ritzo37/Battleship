function ship(length) {
  let hitCnt = 0;
  return {
    shipLength: length,
    isSunk() {
      let currHitCnt = this.getHitCnt();
      return currHitCnt == this.shipLength;
    },
    hit() {
      hitCnt += 1;
    },
    getHitCnt() {
      return hitCnt;
    },
  };
}

function cell() {
  return {
    isShipCell: false,
    shipReference: null,
    hitStatus : 0 , 
  };
}

function gameBoard() {
  let board = [];
  for (let i = 0; i < 10; i++) {
    let currRow = [];
    for (let j = 0; j < 10; j++) {
      let currCell = cell();
      currRow.push(currCell);
    }
    board.push(currRow);
  }

  return {
    getBoard() {
      return board;
    },
    placeShip(x, y, length, playerShip) {
      y = parseInt(y);
      x = parseInt(x);
      if (y + length > 10) {
        return 0;
      }
      let alreadyPlacedShipCheck = false;
      for (let i = y; i < y + length; i++) {
        if (board[x][i].isShipCell) {
          alreadyPlacedShipCheck = true;
          break;
        }
      }
      if (alreadyPlacedShipCheck) return 0;
      else {
        for (let i = y; i < y + length; i++) {
          board[x][i].isShipCell = true;
          board[x][i].shipReference = playerShip;
        }
        return 1;
      }
    },
  };
}

function Player() {
  let board = gameBoard();
  let playerBoard = board.getBoard();
  let playerShips = [];
  let shipsPlacedCnt = 0;
  for (let i = 0; i < 4; i++) {
    let currShip = ship(4);
    playerShips.push(currShip);
  }
  return {
    markCordinate(x, y) {
      playerBoard[x][y].hitStatus = 1;
      if (playerBoard[x][y].isShipCell) {
        this.hitShip(x,y);
      }
    },
    isShipCell(x,y) {
      return  playerBoard[x][y].isShipCell;
    } ,
    hitShip(x,y) {
       playerBoard[x][y].shipReference.hit() ;
    },
    sunkShipCheck(x,y) {
       if (playerBoard[x][y].shipReference.isSunk()) {
         return true ;
       }
       else {
         return false; 
       }
    },
    getBoard() {
      return playerBoard;
    },
    placeShip(x, y, length, indx) {
      if (this.getShipsPlaced() >= 4) return 0;
      if (board.placeShip(x, y, length, playerShips[indx])) {
        shipsPlacedCnt += 1;
        return 1;
      } else {
        return 0;
      }
    },
    getShipsPlaced() {
      return shipsPlacedCnt;
    },
    hitCordinateCheck(x , y) {
       if (playerBoard[x][y].hitStatus) {
          return 1; 
       }
       else {
         return 0 ;
       }
    }
  };
}

let player1 = Player();
let player2 = Player();

export { player1, player2 };
