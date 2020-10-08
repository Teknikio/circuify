      
    class Compare extends Element {
        constructor() {
            super(2, 4, 2, 3);
            this.outputs = [new Joint(null, jointType.OUTPUT)];
            this.inputs = [
                new Joint(null, jointType.INPUT),
            ];
            this.name = "";
        }
    
        setName = (name) => {
            this.name = name;
        };
    
        getName = () => {
            return this.name;
        };
    
    
        show = (pos, cellSize) => {
    
            this.position = pos;
    
            rect(pos.x, pos.y, 2.5 * cellSize, 2.5 * cellSize, 2.5 * cellSize *.25, 2 * cellSize *.25, 2.5 * cellSize *.25, 2.5 * cellSize *.25 );
    
            //rect(pos.x, pos.y, 3 * cellSize, 2.5 * cellSize, 2.5 * cellSize *.5, 0, 0, cellSize * 2 ); // input shape
    
             this.outputs[0].show(
                 createVector(pos.x + 2.5* cellSize, pos.y +  1.25* cellSize),
                 cellSize / 2,
                 cellSize,
                 this.state
             );
    
            this.inputs[0].show(
                createVector(pos.x, pos.y +  1.25* cellSize),
                cellSize / 2,
                cellSize,
                this.state
            );
    
        
         //   image(LEDIcon, 25, 25, 50, 50);
            
            this.setColor();
            };

    calculateOutput = () => {
        return;
    };
}
