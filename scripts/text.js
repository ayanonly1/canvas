goog.require('Canvas');

/**
 * Method which draws text on a canvas
 *
 * @param {Object} config - Contains configuration options to render text on a
 *                        canvas.
 * @param {string} [config.textStr=''] - The text which will be written onto the
 *                                     canvas.
 * @param {number} [config.posX=0] - The start position of the text along the X
 *                                 direction.
 * @param {number} [config.posY=fontPx] - The start position of the text along
 *                                      the Y direction.
 * @param {number} [config.fontPx=16] - The font size of the text in pixels.
 * @param {string} [config.fontFamily=serif] - The font family of the text.
 * @param {string} [config.fontColor=#000000] - The color of the text to be
 *                                            rendered in HEX code.
 */
window.Canvas.prototype.text = function(config) {
    var textStr = config.textStr || '';
    var posX = config.posX || 0;
    var fontPx = config.fontPx || 16;
    var posY = config.posY || fontPx;
    var fontFamily = config.fontFamily || 'serif';
    var fontColor = config.fontColor || '#000000';

    this.ctx.fillStyle = fontColor;
    this.ctx.font = fontPx + 'px ' + fontFamily;
    this.ctx.fillText(textStr, posX, posY);
};
