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
export declare class Canvas extends Screen {
    protected frame: CanvasFrame;
    constructor(frame: CanvasFrame);
    write(pixel: PixelCanvas): void;
    drawRect(shape: Shape): void;
    setFrameSize(frame: Frame): void;
    getFrameSize(): {
        w: number;
        h: number;
    };
    getCharacter(): string;
    changeCharacter(character: string): void;
}
