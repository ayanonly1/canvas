goog.require('Canvas');

/**
 * Method which draws an image on a canvas
 * @param  {{imgUrl: string}} config Contains configuration options to render an image on a canvas
 */
window.Canvas.prototype.image = function(config) {
	/**
	 * Contains the URL at which to find the image
	 * @private
	 * @type {string}
	 */
	var imgUrl = config.imgUrl;

	console.info('Image URL:', imgUrl);
};