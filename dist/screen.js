import { range } from "./utils.js";
export class Screen {
    frame;
    framebuffer = [];
    constructor(frame) {
        this.frame = frame;
        this.createFrame();
    }
    createFrame() {
        for (const row of range(this.frame.h)) {
            this.framebuffer[row] = [];
            for (const column of range(this.frame.w)) {
                this.framebuffer[row][column] = " ";
            }
        }
    }
    setFrameSize(frame) {
        this.frame = frame;
        this.createFrame();
    }
    getFrameSize() {
        return this.frame;
    }
    clear() {
        this.framebuffer = [];
    }
    print() {
        console.log(this.getFramebufferAsText());
    }
    write(pixel) {
        pixel.y in this.framebuffer && pixel.x in this.framebuffer[0]
            ? (this.framebuffer[pixel.y][pixel.x] = pixel.c)
            : 0;
    }
    getFramebufferAsText() {
        return this.framebuffer.map((column) => column.join("")).join("\n\r");
    }
}
//# sourceMappingURL=screen.js.map