import { Screen } from "./screen.js";
export class Canvas extends Screen {
    frame;
    constructor(frame) {
        super(frame);
        this.frame = frame;
    }
    write(pixel) {
        super.write({
            c: this.frame.c,
            ...pixel,
        });
    }
    drawRect(shape) {
        let { x, y } = shape;
        while (y < shape.h) {
            while (x < shape.w) {
                this.write({
                    x,
                    y,
                });
                x++;
            }
            x = shape.x;
            y++;
        }
    }
    setFrameSize(frame) {
        const character = this.frame.c;
        super.setFrameSize(frame);
        this.frame.c = character;
    }
    getFrameSize() {
        return {
            w: this.frame.w,
            h: this.frame.h,
        };
    }
    getCharacter() {
        return this.frame.c;
    }
    changeCharacter(character) {
        this.frame.c = character;
    }
}
//# sourceMappingURL=canvas.js.map