function GameOfLifeCanvasRender(gameOfLife, pixelSize, numMaxGenerations) {
    this.gameOfLife = gameOfLife;
    this.generation = 0;
    this.pixelSize = pixelSize;
    this.generationLabel = document.createElement("Label");
    this.generationLabel.innerHTML = "Generation: ";
    
    this.canvas = document.createElement('canvas');
    this.canvas.id     = "GameOfLifeCanvas";
    this.canvas.width  = this.gameOfLife.board.numColumns * this.pixelSize;
    this.canvas.height = this.gameOfLife.board.numRows * this.pixelSize;
    this.canvas.style.zIndex   = 8;
    this.canvas.style.border   = "1px solid gray";
    
    var sizeXLabel = document.createElement("Label");
    sizeXLabel.innerHTML = "Canvas Width: " + this.canvas.width + " ";
    var sizeYLabel = document.createElement("Label");
    sizeYLabel.innerHTML = "Canvas Height: " + this.canvas.height + " ";
    
    document.body.appendChild(sizeXLabel);
    document.body.appendChild(sizeYLabel);
    document.body.appendChild(this.generationLabel);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(this.canvas);
    document.body.appendChild(document.createElement("br"));
    
    this.Render(numMaxGenerations);  
};

GameOfLifeCanvasRender.prototype.Render = function(numMaxGenerations) {
    var ctx = this.canvas.getContext("2d");
    ctx.fillStyle = "red";

    var stopOnAllDead = true;
    var self = this;

    var animation = setInterval(function() {
    //canvas.addEventListener("keypress", function (e) {
        ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);

        stopOnAllDead = true;

        var nextState = self.gameOfLife.board.GetStateMatrix();
        
        for (var rowIndex = 0; rowIndex < self.gameOfLife.board.numRows; rowIndex++) {
            for (var colIndex = 0; colIndex < self.gameOfLife.board.numColumns; colIndex++) {
                if (nextState[rowIndex][colIndex] === 1) {
                    ctx.fillRect(colIndex*self.pixelSize, rowIndex*self.pixelSize, self.pixelSize, self.pixelSize);
                    stopOnAllDead = false;
                }
            }
        }

        self.gameOfLife.NextGeneration();

        self.generation++;
        self.generationLabel.innerHTML = "Generation: " + self.generation;

        if (stopOnAllDead || self.generation === numMaxGenerations) {
            clearInterval(animation);
        }
    //}, false);
    }, 100);
}