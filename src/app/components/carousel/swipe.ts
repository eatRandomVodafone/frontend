/**
 * Swipe.
 *
 * Swipe
 * {Object} properties - specifies the configurations
 * for the module.
 */
export default class Swipe {
    private xDown: null;
    private yDown: null;
    private element: any;
    document: any;

    constructor(element) {
        this.xDown = null;
        this.yDown = null;
        this.element =
            typeof element === 'string'
                ? this.document.querySelector(element)
                : element;
        this.element.addEventListener(
            'touchstart',
            function(evt) {
                this.xDown = evt.touches[0].clientX;
                this.yDown = evt.touches[0].clientY;
            }.bind(this),
            false
        );
    }

    onLeft(callback) {
        this.onLeft = callback;
        return this;
    }

    onRight(callback) {
        this.onRight = callback;
        return this;
    }

    onUp(callback) {
        this.onUp = callback;
        return this;
    }

    onDown(callback) {
        this.onDown = callback;
        return this;
    }

    handleTouchMove(evt) {
        evt.preventDefault();
        if (!this.xDown || !this.yDown) {
            return;
        }

        const xUp = evt.touches[0].clientX;
        const yUp = evt.touches[0].clientY;

        // @ts-ignore
        const xDiff = this.xDown - xUp;
        // @ts-ignore
        const yDiff = this.yDown - yUp;

        const output = Object.assign(evt, { xDiff }, { yDiff });

        Math.abs(xDiff) > Math.abs(yDiff) // Most significant.
            ? xDiff > 0
                ? this.onLeft(output)
                : this.onRight(output)
            : yDiff > 0
            ? this.onUp(output)
            : this.onDown(output);

        // Reset values.
        this.xDown = null;
        this.yDown = null;
    }

    run() {
        this.element.addEventListener(
            'touchmove',
            function(evt) {
                this.handleTouchMove(evt);
            }.bind(this),
            false
        );
    }
}
