;(function() {
	var init = function() {
		var config = {
				target: 'canvas-target',
				width: 500,
				height: 500,
				context: '2d'
			},
			pathConfig = {
				svgStr: 'SVG path!'
			},
			textConfig = {
				textStr: 'Text string!',
				posX: 10,
				posY: 50,
				fontPx: 30,
				fontFamily: 'Arial'
			},
			imgConfig = {
				imgUrl: 'res/img/sample.png',
				posX: 5,
				posY: 5,
				width: 200,
				height: 200
			};

		var canvas = new Canvas(config);
		canvas.path(pathConfig);
		canvas.text(textConfig);
		canvas.image(imgConfig);
	};
	init();
})();