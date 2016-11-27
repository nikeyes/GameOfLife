function Cell(rowIndex, colIndex, status) {
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
    this.isAlive = status;
};

Cell.prototype.IsMyPosition = function (row, col) {
  return this.rowIndex === row && this.colIndex === col;
};

Cell.prototype.Kill = function () {
  this.isAlive = 0;
}

Cell.prototype.Revive = function () {
  this.isAlive = 1;
}
