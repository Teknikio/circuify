class LED extends Element {
    constructor() {
        super(2, 4, 2, 3);
        this.inputs = [new Joint(false, jointType.INPUT)];
        this.outputs = [];
        this.name = "";
    }

    setName = (name) => {
        this.name = name;
    };

    getName = () => {
        return this.name;
    };


    show = (pos, cellSize) => {
        this.setColor();

    rect(2.5 * cellSize *.5, 0, 0, cellSize * 2, pos.x, pos.y, 3 * cellSize, 2.5 * cellSize,  );

    this.inputs[0].show(
            createVector(pos.x + 3* cellSize, pos.y +  1.25* cellSize),
            cellSize / 2,
            cellSize,
            this.state
        );

          

    };

    calculateOutput = () => {
        this.outputs[0].setState(false);
    };
}
