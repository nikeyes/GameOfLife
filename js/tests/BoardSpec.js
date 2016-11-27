describe("Board", function() {
    describe("Given a Board and 1 position", function() {
        it("When Postion is -1,-1 Then IsValidPosition return false", function () {
            var expected = false;
            var initialState = [
                    [0, 0, 0],
                    [0, 0, 1],
                    [0, 1, 1]
                ];
                
            var sut = new Board(initialState);
            var actual = sut.IsValidPosition(-1,-1);
            expect(expected).toEqual(actual);
        });

        it("When Postion is -1, 0 Then IsValidPosition return false", function () {
            var expected = false;
            var initialState = [
                    [0, 0, 0],
                    [0, 0, 1],
                    [0, 1, 1]
                ];
            
            var sut = new Board(initialState);
            var actual = sut.IsValidPosition(-1,0);
            expect(expected).toEqual(actual);
        });

        it("When Postion is 0,-1 Then IsValidPosition return false", function () {
            var expected = false;
            var initialState = [
                    [0, 0, 0],
                    [0, 0, 1],
                    [0, 1, 1]
                ];
            
            var sut = new Board(initialState);
            var actual = sut.IsValidPosition(0,-1);
            expect(expected).toEqual(actual);
        });

        it("When Postion is 3, 0 Then IsValidPosition return false", function () {
            var expected = false;
            var initialState = [
                    [0, 0, 0],
                    [0, 0, 1],
                    [0, 1, 1]
                ];
            
            var sut = new Board(initialState);
            var actual = sut.IsValidPosition(3,0);
            expect(expected).toEqual(actual);
        });

        it("When Postion is 0, 3 Then IsValidPosition return false", function () {
            var expected = false;
            var initialState = [
                    [0, 0, 0],
                    [0, 0, 1],
                    [0, 1, 1]
                ];
            
            var sut = new Board(initialState);
            var actual = sut.IsValidPosition(0,3);
            expect(expected).toEqual(actual);
        });

        it("When Postion is 3, 3 Then IsValidPosition return false", function () {
            var expected = false;
            var initialState = [
                    [0, 0, 0],
                    [0, 0, 1],
                    [0, 1, 1]
                ];
            
            var sut = new Board(initialState);
            var actual = sut.IsValidPosition(3,3);
            expect(expected).toEqual(actual);
        });

        it("When Postion is 0, 0 Then IsValidPosition return true", function () {
            var expected = true;
            var initialState = [
                    [0, 0, 0],
                    [0, 0, 1],
                    [0, 1, 1]
                ];
            
            var sut = new Board(initialState);
            var actual = sut.IsValidPosition(0,0);
            expect(expected).toEqual(actual);
        });

        it("When Postion is 2, 1 Then IsValidPosition return true", function () {
            var expected = true;
            var initialState = [
                    [0, 0, 0],
                    [0, 0, 1],
                    [0, 1, 1]
                ];
            
            var sut = new Board(initialState);
            var actual = sut.IsValidPosition(2,1);
            expect(expected).toEqual(actual);
        });

        it("When Postion is 2, 2 Then IsValidPosition return true", function () {
            var expected = true;
            var initialState = [
                    [0, 0, 0],
                    [0, 0, 1],
                    [0, 1, 1]
                ];
            
            var sut = new Board(initialState);
            var actual = sut.IsValidPosition(2,2);
            expect(expected).toEqual(actual);
        });
    });

    describe("Given a Board", function() {
        it("When Clone board Then has a new Board with the same values", function () {
            var expected = [
                    [1, 0, 0],
                    [0, 1, 1],
                    [0, 1, 1]
                ];
            var initialState = [
                    [1, 0, 0],
                    [0, 1, 1],
                    [0, 1, 1]
                ];
                
            var sut = new Board(initialState);
            var actual = sut.Clone();
            expect(expected).not.toEqual(actual);

            for (var i=0; i<sut.numColumns; i++) {
                for (var j=0;j<sut.numRows; j++) {
                    expect(expected[i][j]).toEqual(actual.GetCell(i,j).isAlive)
                }
            }
        });
    });

    describe("Given a Board And 1 cell", function () {
        it("When cell has 0 alive neighbours Then GetNumAliveNeighbours return 0", function () {
            var expected = 0;
            var initialState = [
                    [0, 0, 0],
                    [0, 1, 0],
                    [0, 0, 0]
            ];
            var cell = new Cell(1, 1);

            var sut = new Board(initialState);
            var actual = sut.GetNumAliveNeighbours(cell);

            expect(expected).toEqual(actual);
        });

        it("When cell has 1 alive neighbours Then GetNumAliveNeighbours return 1", function () {
            var expected = 1;
            var initialState = [
                    [0, 1, 0],
                    [0, 1, 0],
                    [0, 0, 0]
            ];
            var cell = new Cell(1, 1);
            
            var sut = new Board(initialState);
            var actual = sut.GetNumAliveNeighbours(cell);

            expect(expected).toEqual(actual);
        });

        it("When cell has 2 alive neighbours Then GetNumAliveNeighbours return 2", function () {
            var expected = 2;
            var initialState = [
                    [1, 1, 0],
                    [1, 0, 0],
                    [0, 0, 0]
            ];
            var cell = new Cell(0, 0);
        
            var sut = new Board(initialState);
            var actual = sut.GetNumAliveNeighbours(cell);

            expect(expected).toEqual(actual);
        });

        it("When cell has 2 alive neighbours Then GetNumAliveNeighbours return 2", function () {
            var expected = 2;
            var initialState = [
                    [0, 0, 0],
                    [0, 0, 1],
                    [0, 1, 1]
            ];
            var cell = new Cell(2, 2);
            
            var sut = new Board(initialState);
            var actual = sut.GetNumAliveNeighbours(cell);

            expect(expected).toEqual(actual);
        });

        it("When cell has 3 alive neighbours Then GetNumAliveNeighbours return 3", function () {
            var expected = 3;
            var initialState = [
                    [1, 1, 1],
                    [1, 1, 1],
                    [1, 1, 1]
            ];
            var cell = new Cell(2, 2);
            
            var sut = new Board(initialState);
            var actual = sut.GetNumAliveNeighbours(cell);

            expect(expected).toEqual(actual);
        });

        it("When cell has 0 alive neighbours Then GetNumAliveNeighbours return 0", function () {
            var expected = 0;
            var initialState = [
                    [0, 0, 0],
                    [0, 0, 1],
                    [0, 1, 1]
            ];
            var cell = new Cell(0, 0);
            
            var sut = new Board(initialState);
            var actual = sut.GetNumAliveNeighbours(cell);

            expect(expected).toEqual(actual);
        });
    });
});