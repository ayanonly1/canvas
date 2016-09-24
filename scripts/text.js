goog.require('Canvas');

/**
 * Method which draws text on a canvas
 * @param  {{textStr: string}} config Contains configuration options to render text on a canvas
 */
window.Canvas.prototype.text = function(config) {
	/**
	 * The text which will be written onto the canvas
	 * @private
	 * @type {string}
	 */
	var textStr = config.textStr;

	console.info(textStr);
};