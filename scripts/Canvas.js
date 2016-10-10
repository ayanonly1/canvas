goog.provide('Canvas');

/**
 * The base constructor for the Canvas library
 * @constructor
 *
 * @param {Object} config - The configuration object used to initialize the
 *                        canvas.
 * @param {string} config.target - The ID of target element within which the
 *                               canvas will be rendered.
 * @param {number} [config.width=640] - The width of the canvas element.
 * @param {number} [config.height=360] - The height of the canvas element.
 * @param {string} [config.fillColor=#FFFFFF] - The color of the canvas element
 *                                            in HEX format.
 */
window.Canvas = function(config) {
    if (!config.target) {
        throw Error;
    }
    var target = config.target;
    var fillColor = config.fillColor || '#FFFFFF';
    var context = '2d';

    /**
    * The width of the canvas element in pixels.
    * @type {number}
    */
    this.width = config.width || 640;
    /**
    * The height of the canvas element in pixels.
    * @type {number}
    */
    this.height = config.height || 360;

    /**
    * The canvas element being rendered.
    * @type {Element}
    */
    this.canvasElement = document.createElement('canvas');
    this.canvasElement.setAttribute('id', 'qcanvas');
    this.canvasElement.setAttribute('width', this.width);
    this.canvasElement.setAttribute('height', this.height);

    /**
    * The base rendering context of the canvas element.
    * @type {CanvasRenderingContext2D}
    */
    this.ctx = this.canvasElement.getContext(context);
    this.ctx.fillStyle = fillColor;
    this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);

    /**
    * The target element in which the canvas is to be rendered.
    * @type {Element}
    */
    this.targetElement = document.getElementById(target);
    this.targetElement.style.padding = 0;
    this.targetElement.style.margin = 0;
    this.targetElement.appendChild(this.canvasElement);
};
