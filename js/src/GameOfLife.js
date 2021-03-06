function GameOfLife(initialState) {
    this.board = new Board(initialState);
};

GameOfLife.prototype.NextGeneration = function() {
  var tempBoard = this.board.Clone();

  for (var rowIndex = 0; rowIndex < this.board.numRows; rowIndex++) {
    for (var colIndex = 0; colIndex < this.board.numColumns; colIndex++) {
      var currentCell = this.board.GetCell(rowIndex, colIndex);
      var numAliveNeighbours = this.board.GetNumAliveNeighbours(currentCell);
      if (currentCell.isAlive === 0 && numAliveNeighbours === 3) {
        tempBoard.GetCell(rowIndex,colIndex).Revive();
      } 
      else if (currentCell.isAlive === 1 && numAliveNeighbours < 2) {
        tempBoard.GetCell(rowIndex,colIndex).Kill();
      } 
      else if (currentCell.isAlive === 1 && numAliveNeighbours > 3) {
        tempBoard.GetCell(rowIndex,colIndex).Kill();
      }     
    }
  }
  this.board = tempBoard;  
};

