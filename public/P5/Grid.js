class Grid {
    constructor(strokeColor) {
        this.strokeColor = strokeColor;
    }

    show() {
        stroke(255);
        strokeWeight(map(cellSize, minZoom, maxZoom, .5, 1));

        for (let i = 0; i < width; i += cellSize) {
            line(i, 0, i, height);
        }

        for (let i = 0; i < height; i += cellSize) {
            line(0, i, width, i);
        }
    }

    snapToGrid(pos) {
        return createVector(
            round(pos.x / cellSize) * cellSize,
            round(pos.y / cellSize) * cellSize
        );
    }

    posToCell(pos) {
        return createVector(round(pos.x / cellSize), round(pos.y / cellSize));
    }

    cellToPos(cell) {
        return createVector(cell.x * cellSize, cell.y * cellSize);
    }
}
