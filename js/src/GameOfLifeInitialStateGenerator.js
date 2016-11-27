function GameOfLifeInitialStateGenerator() {

};

GameOfLifeInitialStateGenerator.prototype.GetInitialState = function(numRows, numColumns, aliveFactor) {
    var initialState = [];
    for (var i = 0; i < numRows; i++) {
      initialState.push([]);
      for (var j = 0; j < numColumns; j++) {
          var rowsNotPaintingZone = numRows/6;
          var colsNotPaintingZone = numColumns/6;
          if (i > rowsNotPaintingZone && i <numRows-rowsNotPaintingZone 
                && j > colsNotPaintingZone && j < numColumns-colsNotPaintingZone) {
            var isAlive = Math.random() <= aliveFactor ? 1 : 0
            initialState[i].push(isAlive);
          }
          else
          {
            var isAlive = 0;
            initialState[i].push(0);
          }
      }
    }
    return initialState;
}


