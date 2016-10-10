;(function() {
    var init = function() {
        var config = {
            target: 'canvas-target',
            fillColor: '#DEDEDE'
        };
        var textConfig = {
            textStr: 'Text string!'
        };
        // var pathConfig = {
        //   svgStr: 'SVG path!'
        // };
        // var imgConfig = {
        //   imgUrl: 'res/img/sample.png',
        //   posX: 5,
        //   posY: 5,
        //   width: 200,
        //   height: 200
        // };

        var canvas = new Canvas(config);
        canvas.text(textConfig);
        // canvas.path(pathConfig);
        // canvas.image(imgConfig);
    };
    init();
})();
