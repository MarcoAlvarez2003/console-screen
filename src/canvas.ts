import { Screen, Frame } from "./screen.js";

export interface CanvasFrame extends Frame {
    c: string;
}

export interface PixelCanvas {
    x: number;
    y: number;
}

export interface Shape {
    x: number;
    y: number;
    w: number;
    h: number;
}

export class Canvas extends Screen {
    constructor(protected frame: CanvasFrame) {
        super(frame);
    }

    public override write(pixel: PixelCanvas) {
        super.write({
            c: this.frame.c,
            ...pixel,
        });
    }

    public drawRect(shape: Shape) {
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

    public setFrameSize(frame: Frame) {
        const character = this.frame.c;
        super.setFrameSize(frame);
        this.frame.c = character;
    }

    public getFrameSize() {
        return {
            w: this.frame.w,
            h: this.frame.h,
        };
    }

    public getCharacter() {
        return this.frame.c;
    }

    public changeCharacter(character: string) {
        this.frame.c = character;
    }
}
