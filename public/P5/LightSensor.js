class LightSensor extends Element {
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
        if (!this.checkPresetAndClear()) {
            if (this.inputs[1].getState() == true) {
                if (
                    this.inputs[0].getState() == null ||
                    this.inputs[2].getState() == null
                ) {
                    this.outputs[0].setState(null);
                    this.outputs[1].setState(null);
                } else if (
                    this.inputs[0].getState() == true &&
                    this.inputs[2].getState() == false
                ) {
                    this.outputs[0].setState(true);
                    this.outputs[1].setState(false);
                } else if (
                    this.inputs[0].getState() == false &&
                    this.inputs[2].getState() == true
                ) {
                    this.outputs[0].setState(false);
                    this.outputs[1].setState(true);
                } else if (
                    this.inputs[0].getState() == true &&
                    this.inputs[2].getState() == true
                ) {
                    this.outputs[0].setState(null);
                    this.outputs[1].setState(null);
                }
            } else if (this.inputs[1].getState() == null) {
                this.outputs[0].setState(null);
                this.outputs[1].setState(null);
            }
        }
    };

    checkPresetAndClear = () => {
        if (
            (this.inputs[3].getState() == null &&
                this.inputs[4].getState() == null) ||
            (this.inputs[3].getState() == true &&
                this.inputs[4].getState() == null) ||
            (this.inputs[3].getState() == null &&
                this.inputs[4].getState() == true)
        ) {
            this.outputs[0].setState(null);
            this.outputs[1].setState(null);
            return true;
        } else if (
            this.inputs[3].getState() == false &&
            this.inputs[4].getState() == null
        ) {
            this.outputs[0].setState(true);
            this.outputs[1].setState(null);
            return true;
        } else if (
            this.inputs[3].getState() == null &&
            this.inputs[4].getState() == false
        ) {
            this.outputs[0].setState(null);
            this.outputs[1].setState(true);
            return true;
        } else if (
            this.inputs[3].getState() == false &&
            this.inputs[4].getState() == false
        ) {
            this.outputs[0].setState(true);
            this.outputs[1].setState(true);
            return true;
        } else if (
            this.inputs[3].getState() == true &&
            this.inputs[4].getState() == false
        ) {
            this.outputs[0].setState(false);
            this.outputs[1].setState(true);
            return true;
        } else if (
            this.inputs[3].getState() == false &&
            this.inputs[4].getState() == true
        ) {
            this.outputs[0].setState(true);
            this.outputs[1].setState(false);
            return true;
        }

        return false;
    };
}
