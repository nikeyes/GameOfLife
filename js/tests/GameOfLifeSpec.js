describe("GameOfLife", function() {
    describe("Given a Game of Life board When cell is Alive", function () {
        it("And he had less than 2 neighbours (0) Then the cell die", function() {
            var initialState = [
                [0, 0, 0],
                [0, 1, 0],
                [0, 0, 0]
            ];

            var expected = [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ];

            var actual = null;

            var sut = new GameOfLife(initialState);
            sut.NextGeneration();
            actual = sut.board.GetStateMatrix();
            expect(expected).toEqual(actual);
        });
        it("And he had less than 2 neighbours (1) Then the cell die", function() {
            var initialState = [
                [0, 0, 0],
                [0, 1, 1],
                [0, 0, 0]
            ];

            var expected = [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ];

            var actual = null;

            var sut = new GameOfLife(initialState);
            sut.NextGeneration();
            actual = sut.board.GetStateMatrix();
            expect(expected).toEqual(actual);
        });

        it("And he had 2 or 3 neighbours Then the cell alive", function() {
            var initialState = [
                [0, 1, 0],
                [0, 1, 1],
                [0, 0, 0]
            ];

            var expected = [
                [0, 1, 1],
                [0, 1, 1],
                [0, 0, 0]
            ];

            var actual = null;

            var sut = new GameOfLife(initialState);
            sut.NextGeneration();
            actual = sut.board.GetStateMatrix();
            expect(expected).toEqual(actual);
        });

        it("And he had more than 3 neighbours Then the cell die", function() {
            var initialState = [
                [1, 1, 1],
                [1, 1, 0],
                [0, 0, 0]
            ];

            var expected = [
                [1, 0, 1],
                [1, 0, 1],
                [0, 0, 0]
            ];

            var actual = null;

            var sut = new GameOfLife(initialState);
            sut.NextGeneration();
            actual = sut.board.GetStateMatrix();
            expect(expected).toEqual(actual);
        });
    });

     describe("Given a Game of Life board When cell is Die", function () {
        it("And he had exacly 3 neighbours Then the cell Alive", function() {
            var initialState = [
                [0, 1, 1],
                [0, 1, 0],
                [0, 0, 0]
            ];

            var expected = [
                [0, 1, 1],
                [0, 1, 1],
                [0, 0, 0]
            ];

            var actual = null;

            var sut = new GameOfLife(initialState);
            sut.NextGeneration();
            actual = sut.board.GetStateMatrix();
            expect(expected).toEqual(actual);
        });
     });
});