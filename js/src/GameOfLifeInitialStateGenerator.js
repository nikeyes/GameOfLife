function GameOfLifeInitialStateGenerator() {

};

GameOfLifeInitialStateGenerator.prototype.GetInitialState = function(numRows, numColumns, aliveFactor) {
    var initialState = [];
    for (var i = 0; i < numRows; i++) {
      initialState.push([]);
      for (var j = 0; j < numColumns; j++) {
          var isAlive = Math.random() <= aliveFactor ? 1 : 0
          initialState[i].push(isAlive);
      }
    }
    return initialState;
}


