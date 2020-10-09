class Accelerometer extends Element {
    constructor() {
        super(3, 3, 2, 3);
        this.outputs = [new Joint(null, jointType.OUTPUT)];
        this.inputs = [];

    }

    show = (pos, cellSize) => {
        this.position = pos;

    
        rect(pos.x, pos.y, 3 * cellSize, 2.5 * cellSize, 2.5 * cellSize *.5, 0, 0, cellSize * 2 );

        this.outputs[0].show(
            createVector(pos.x + 3* cellSize, pos.y +  1.25* cellSize),
            cellSize / 2,
            cellSize,
            this.state
        );

        this.setColor();


        textSize(cellSize * 0.7);
        strokeWeight(0.75);
        
        //textFont("letterFont");
        textFont("Helvetica");
        text("0", pos.x + 2.4 * cellSize, pos.y + 1.2 * cellSize);
    };

    calculateOutput = () => {
        if (
            this.inputs[0].getState() === null ||
            this.inputs[1].getState() === null
        ) {
            this.outputs[0].setState(null);
            this.outputs[1].setState(null);
        } else {
            if (this.inputs[1].getState() === false) {
                this.outputs[0].setState(this.inputs[0].getState());
                this.outputs[1].setState(false);
            } else if (this.inputs[1].getState() === true) {
                this.outputs[1].setState(this.inputs[0].getState());
                this.outputs[0].setState(false);
            }
        }
    };
}
