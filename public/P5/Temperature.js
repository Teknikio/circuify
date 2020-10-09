class Temperature extends Element {
    constructor() {
        super(2, 4, 2, 3);
        this.outputs = [new Joint(false, jointType.INPUT)];
        this.inputs = [];
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

    rect(pos.x, pos.y, 3 * cellSize, 2.5 * cellSize, 2.5 * cellSize *.5, 0, 0, cellSize * 2 );

    this.outputs[0].show(
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
