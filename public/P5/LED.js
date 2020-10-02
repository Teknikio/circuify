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
     //   this.setColor();

        this.position = pos;

        line(
            pos.x + 2 * cellSize,
            pos.y + cellSize,
            pos.x + 3 * cellSize,
            pos.y + cellSize
        );

    

        this.inputs[0].show(
            createVector(pos.x + cellSize, pos.y + 4 * cellSize),
            cellSize / 2,
            cellSize,
            this.state
        );

        if (this.inputs[0].getState() == true) fill(252, 241, 71);
        else fill(255, 255, 255, 100);
        
        fill(139, 139, 139);
            
        rect(pos.x, pos.y, 3 * cellSize, 2.5 * cellSize, 2.5 * cellSize *.5, 0, 0, cellSize * 2 );
        let img = loadImage('Images/icons/LEDicon.png');
        image(img, pos.x + 0.5 * cellSize, pos.y + 1.65 * cellSize);
          

    };

    calculateOutput = () => {
        return;
    };
}
