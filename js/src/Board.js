function Board(initialState) {
    this.__board = [];
    this.numRows = initialState.length;
    this.numColumns = initialState[0].length;
    
     for (var i = 0; i < this.numRows; i++) {
       this.__board.push([]);
       for (var j = 0; j < this.numColumns; j++) {
         this.__board[i].push(new Cell(i,j, initialState[i][j]));
       }
     }
};

Board.prototype.Clone = function () {
  var tempBoard  = new Board(this.GetStateMatrix());
  return tempBoard;
};

Board.prototype.GetCell = function (numRow, numCol) {
  return this.__board[numRow][numCol];
};

Board.prototype.IsCellAlive = function (numRow, numCol) {
  return this.__board[numRow][numCol].isAlive;
};

Board.prototype.IsValidPosition = function(row, col) {
  if (row >= 0 && row < this.numRows 
   && col >= 0 && col < this.numColumns) {
      return true;
    }
    else {
      return false;
    }
};

Board.prototype.GetNumAliveNeighbours = function(cell) {
  var result = 0;
  for (var i = cell.rowIndex - 1; i <= cell.rowIndex + 1; i++) {
    for (var j = cell.colIndex - 1; j <= cell.colIndex + 1; j++) {
      if (!cell.IsMyPosition(i,j) && this.IsValidPosition(i,j)) {
        if (this.IsCellAlive(i,j) === 1) {
          result++;
        }
      }
    }
  }
  return result;
};

Board.prototype.GetStateMatrix = function () {
  var result = [];
  for (var i = 0; i < this.numRows; i++) {
      result.push([]);
       for (var j = 0; j < this.numColumns; j++) {
         result[i].push(this.GetCell(i,j).isAlive);
       }
     }
     return result;
}