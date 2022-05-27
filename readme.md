# Console Screen

## Classes

### Screen

#### Interfaces

##### Frame

-   **w**: _number_
-   **h**: _number_

##### Pixel

-   **c**: _string_
-   **x**: _number_
-   **y**: _number_

#### Methods

-   **setFrameSize**
    -   **Arguments**
        -   [Frame](#Frame)
    -   **Returns**
        -   [Frame](#frame)
-   **getFrameSize**
    -   **Returns**
        -   [Frame](#frame)
-   **clear**
-   **print**
-   **write**
    -   **Arguments**
        -   [Pixel](#pixel)
-   **getFrameBufferAsText**
    -   **Returns**
        -   **string**

### Canvas

##### PixelCanvas

##### FrameCanvas

**FrameCanvas** extends from [Frame](#frame) interface.

-   **c**: _string_

##### PixelCanvas

-   **x**: _number_
-   **y**: _number_

##### Shape

-   **x**: _number_
-   **y**: _number_
-   **w**: _number_
-   **h**: _number_

#### Methods

**Canvas** class extends from [Screen](#screen) class.

-   **write**
    -   **Arguments**
        -   [pixel](#pixelcanvas)
-   **drawRect**
    -   **Arguments**
        -   [shape](#Shape)
-   **setFrameSize**
    -   **Arguments**
        -   [frame](#frame)
-   **getFrameSize**
    -   **Returns**
        -   [frame](#frame)
-   **getCharacter**
    -   **Returns**
        -   **string**
-   **setCharacter**
    -   **Arguments**
        -   **string**
