import { range } from "./utils.js";

export interface Frame {
    w: number;
    h: number;
}

export interface Pixel {
    c: string;
    x: number;
    y: number;
}

export class Screen {
    protected framebuffer: string[][] = [];

    constructor(protected frame: Frame) {
        this.createFrame();
    }

    protected createFrame() {
        for (const row of range(this.frame.h)) {
            this.framebuffer[row] = [];

            for (const column of range(this.frame.w)) {
                this.framebuffer[row][column] = " ";
            }
        }
    }

    public setFrameSize(frame: Frame) {
        this.frame = frame;
        this.createFrame();
    }

    public getFrameSize() {
        return this.frame;
    }

    public clear() {
        this.framebuffer = [];
    }

    public print() {
        console.log(this.getFramebufferAsText());
    }

    public write(pixel: Pixel) {
        pixel.y in this.framebuffer && pixel.x in this.framebuffer[0]
            ? (this.framebuffer[pixel.y][pixel.x] = pixel.c)
            : 0;
    }

    public getFramebufferAsText() {
        return this.framebuffer.map((column) => column.join("")).join("\n\r");
    }
}
