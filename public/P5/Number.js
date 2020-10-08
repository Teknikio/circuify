let sevenSegment = [
    0x7e,
    0x30,
    0x6d,
    0x79,
    0x33,
    0x5b,
    0x5f,
    0x70,
    0x7f,
    0x7b,
    0x77,
    0x1f,
    0x4e,
    0x3d,
    0x4f,
    0x47,
];

class Number extends Element {
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

        

        

        let bin = "";

        for (let i = 0; i < this.inputs.length; i++) {
            bin += this.inputs[i].getState() ? "1" : "0";
        }

        fill(187, 200, 183);

        let num = parseInt(bin, 2);
        this.hexShow(pos, cellSize, sevenSegment[num]);

        this.setColor();
    };

    hexShow(pos, cellSize, binaryNum) {
        strokeWeight(0);

        //a
        fill((binaryNum >> 6) & 1 ? (68, 69, 64) : (165, 178, 161));

        beginShape();
        vertex(pos.x + 1.4 * cellSize, pos.y + 0.25 * cellSize);
        vertex(pos.x + 1.5 * cellSize, pos.y + 0.15 * cellSize);
        vertex(pos.x + 2.5 * cellSize, pos.y + 0.15 * cellSize);
        vertex(pos.x + 2.6 * cellSize, pos.y + 0.25 * cellSize);
        vertex(pos.x + 2.5 * cellSize, pos.y + 0.35 * cellSize);
        vertex(pos.x + 1.5 * cellSize, pos.y + 0.35 * cellSize);
        endShape(CLOSE);

        //b
        fill(((binaryNum >> 5) & 1) == 1 ? (68, 69, 64) : (165, 178, 161));

        beginShape();
        vertex(pos.x + 2.65 * cellSize, pos.y + 0.3 * cellSize);
        vertex(pos.x + 2.75 * cellSize, pos.y + 0.4 * cellSize);
        vertex(pos.x + 2.75 * cellSize, pos.y + 1.4 * cellSize);
        vertex(pos.x + 2.65 * cellSize, pos.y + 1.5 * cellSize);
        vertex(pos.x + 2.55 * cellSize, pos.y + 1.4 * cellSize);
        vertex(pos.x + 2.55 * cellSize, pos.y + 0.4 * cellSize);
        endShape(CLOSE);

        //c
        fill(((binaryNum >> 4) & 1) == 1 ? (68, 69, 64) : (165, 178, 161));

        beginShape();
        vertex(pos.x + 2.65 * cellSize, pos.y + 1.55 * cellSize);
        vertex(pos.x + 2.75 * cellSize, pos.y + 1.65 * cellSize);
        vertex(pos.x + 2.75 * cellSize, pos.y + 2.6 * cellSize);
        vertex(pos.x + 2.65 * cellSize, pos.y + 2.7 * cellSize);
        vertex(pos.x + 2.55 * cellSize, pos.y + 2.6 * cellSize);
        vertex(pos.x + 2.55 * cellSize, pos.y + 1.65 * cellSize);
        endShape(CLOSE);

        //d
        fill(((binaryNum >> 3) & 1) == 1 ? (68, 69, 64) : (165, 178, 161));

        beginShape();
        vertex(pos.x + 2.6 * cellSize, pos.y + 2.75 * cellSize);
        vertex(pos.x + 2.5 * cellSize, pos.y + 2.65 * cellSize);
        vertex(pos.x + 1.5 * cellSize, pos.y + 2.65 * cellSize);
        vertex(pos.x + 1.4 * cellSize, pos.y + 2.75 * cellSize);
        vertex(pos.x + 1.5 * cellSize, pos.y + 2.85 * cellSize);
        vertex(pos.x + 2.5 * cellSize, pos.y + 2.85 * cellSize);
        endShape(CLOSE);

        //e
        fill(((binaryNum >> 2) & 1) == 1 ? (68, 69, 64) : (165, 178, 161));

        beginShape();
        vertex(pos.x + 1.35 * cellSize, pos.y + 2.7 * cellSize);
        vertex(pos.x + 1.45 * cellSize, pos.y + 2.6 * cellSize);
        vertex(pos.x + 1.45 * cellSize, pos.y + 1.65 * cellSize);
        vertex(pos.x + 1.35 * cellSize, pos.y + 1.55 * cellSize);
        vertex(pos.x + 1.25 * cellSize, pos.y + 1.65 * cellSize);
        vertex(pos.x + 1.25 * cellSize, pos.y + 2.6 * cellSize);
        endShape(CLOSE);

        //f
        fill(((binaryNum >> 1) & 1) == 1 ? (68, 69, 64) : (165, 178, 161));

        beginShape();
        vertex(pos.x + 1.35 * cellSize, pos.y + 0.3 * cellSize);
        vertex(pos.x + 1.45 * cellSize, pos.y + 0.4 * cellSize);
        vertex(pos.x + 1.45 * cellSize, pos.y + 1.4 * cellSize);
        vertex(pos.x + 1.35 * cellSize, pos.y + 1.5 * cellSize);
        vertex(pos.x + 1.25 * cellSize, pos.y + 1.4 * cellSize);
        vertex(pos.x + 1.25 * cellSize, pos.y + 0.4 * cellSize);
        endShape(CLOSE);

        //g
        fill(((binaryNum >> 0) & 1) == 1 ? (68, 69, 64) : (165, 178, 161));

        beginShape();
        vertex(pos.x + 1.4 * cellSize, pos.y + 1.525 * cellSize);
        vertex(pos.x + 1.5 * cellSize, pos.y + 1.425 * cellSize);
        vertex(pos.x + 2.5 * cellSize, pos.y + 1.425 * cellSize);
        vertex(pos.x + 2.6 * cellSize, pos.y + 1.525 * cellSize);
        vertex(pos.x + 2.5 * cellSize, pos.y + 1.625 * cellSize);
        vertex(pos.x + 1.5 * cellSize, pos.y + 1.625 * cellSize);
        endShape(CLOSE);
    }

    calculateOutput = () => {
        return;
    };
}
