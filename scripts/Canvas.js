goog.provide('Canvas');

/**
 * The base constructor for the Canvas library
 * @constructor
 *
 * @param {{target: string, width: number, height: number, context: string}} config The
 * configuration object used to initialize the canvas
 *
 * @property {string} target  The ID of target element within which the canvas will be rendered
 * @property {number} width   The width of the canvas element to be rendered
 * @property {number} height  The height of the canvas element to be rendered
 * @property {string} context The rendering context of the canvas element (2d)
 */
window.Canvas = function(config) {
	this.target = config.target;
	this.width = config.width;
	this.height = config.height;
	this.context = '2d';

	/**
	 * The target element which will contain the canvas
	 * @private
	 * @type {Element}
	 */
	var targetElement = document.getElementById(this.target);

	/**
	 * The base canvas element
	 * @private
	 * @type {Element}
	 */
	var canvasElement = document.createElement('canvas');
	canvasElement.setAttribute('id', 'qcanvas');
	canvasElement.setAttribute('width', this.width);
	canvasElement.setAttribute('height', this.height);

	/**
	 * The base rendering context of the canvas element
	 * @private
	 * @type {CanvasRenderingContext2D}
	 */
	var ctx = canvasElement.getContext(this.context);

	ctx.fillStyle = '#3d4dad';
	ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);

	targetElement.appendChild(canvasElement);
};