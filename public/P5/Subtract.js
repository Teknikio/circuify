class Subtract extends Element {
    constructor() {
        super(3, 2, 2, 2);
        this.inputs = [];
        this.outputs = [new Joint(true, jointType.OUTPUT)];
    }

    show = (pos, cellSize) => {
        this.setColor();

        this.position = pos;

        line(
            pos.x + 2 * cellSize,
            pos.y + cellSize,
            pos.x + 3 * cellSize,
            pos.y + cellSize
        );

        this.outputs[0].show(
            createVector(pos.x + 3 * cellSize, pos.y + cellSize),
            cellSize / 2,
            cellSize,
            this.state
        );

        this.inputs[0].show(
            createVector(pos.x, pos.y + cellSize / 2),
            cellSize / 2,
            cellSize,
            this.state
        );

        this.inputs[1].show(
            createVector(pos.x, pos.y + (3 * cellSize) / 2),
            cellSize / 2,
            cellSize,
            this.state
        );

        this.setColor();
            
        rect(pos.x, pos.y, 2.5 * cellSize, 2.5 * cellSize, 2.5 * cellSize *.25, 2 * cellSize *.25, 2.5 * cellSize *.25, 2.5 * cellSize *.25 );
        textSize(cellSize * 1.8);
        fill(193, 193, 193);
        textFont("Helvetica");
        text("+", pos.x + 1 * cellSize, pos.y + 1.65 * cellSize);
        this.setColor();
    };

    calculateOutput = () => {
        this.outputs[0].setState(true);
    };
}
