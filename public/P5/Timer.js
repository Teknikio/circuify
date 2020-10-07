class Timer extends Element {
    constructor() {
        super(4, 2, 2, 2);
        this.inputs = [
            new Joint(null, jointType.INPUT),
            new Joint(null, jointType.INPUT),
        ];
        this.outputs = [new Joint(null, jointType.OUTPUT)];
    }

    show = (pos, cellSize) => {

        this.position = pos;

       
        
        this.inputs[0].show(
            createVector(pos.x, pos.y + cellSize ),
            cellSize / 2,
            cellSize,
            this.state
        );

        this.outputs[0].show(
            createVector(pos.x + 3 * cellSize, pos.y + cellSize),
            cellSize / 2,
            cellSize,
            this.state
        );

        this.setColor(193);
        rect(pos.x, pos.y, 2.5 * cellSize, 2.5 * cellSize, 2.5 * cellSize *.25, 2 * cellSize *.25, 2.5 * cellSize *.25, 2.5 * cellSize *.25 );


    };


    calculateOutput = () => {
        if (
            this.inputs[0].getState() === null ||
            this.inputs[1].getState() === null ||
            this.inputs[2].getState() === null
        ) {
            this.outputs[0].setState(null);
        } else {
            if (this.inputs[2].getState() === false) {
                this.outputs[0].setState(this.inputs[0].getState());
            } else if (this.inputs[2].getState() === true) {
                this.outputs[0].setState(this.inputs[1].getState());
            }
        }
    };
}
