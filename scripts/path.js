goog.require('Canvas');

/**
 * Method which draws the equivalent of an SVG path on a canvas
 * @param  {{svgStr: string}} config Contains configuration options to render a path on a canvas
 */
window.Canvas.prototype.path = function(config) {
    /**
    * The SVG path which will be converted into a Canvas path
    * @private
    * @type {string}
    */
    var svgStr = config.svgStr;

    console.info(svgStr);
};
