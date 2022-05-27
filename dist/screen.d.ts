export interface Frame {
    w: number;
    h: number;
}
export interface Pixel {
    c: string;
    x: number;
    y: number;
}
export declare class Screen {
    protected frame: Frame;
    protected framebuffer: string[][];
    constructor(frame: Frame);
    protected createFrame(): void;
    setFrameSize(frame: Frame): void;
    getFrameSize(): Frame;
    clear(): void;
    print(): void;
    write(pixel: Pixel): void;
    getFramebufferAsText(): string;
}
