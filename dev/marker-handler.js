var markerHandler = {
    ismousedown: false,
    prevX: 0,
    prevY: 0,
    mousedown: function(e) {
        var x = e.offsetX,
            y = e.offsetY;
        this.prevX = x;
        this.prevY = y;

        this.ismousedown = true;

        // make sure that pencil is drawing shapes even if mouse is down but mouse isn't moving
        tempContext.lineCap = 'round';
        markerDrawHelper.line(tempContext, [this.prevX, this.prevY, x, y]);

        points[points.length] = ['line', [this.prevX, this.prevY, x, y], markerDrawHelper.getOptions()];

        this.prevX = x;
        this.prevY = y;
    },
    mouseup: function(e) {
        this.ismousedown = false;
    },
    mousemove: function(e) {
        var x = e.offsetX,
            y = e.offsetY;
        if (this.ismousedown) {
            tempContext.lineCap = 'round';
            markerDrawHelper.line(tempContext, [this.prevX, this.prevY, x, y]);

            points[points.length] = ['line', [this.prevX, this.prevY, x, y], markerDrawHelper.getOptions()];

            this.prevX = x;
            this.prevY = y;
        }
    }
}

var markerLineWidth = document.getElementById('marker-stroke-style').value,
    markerStrokeStyle = '#' + document.getElementById('marker-fill-style').value,
    markerGlobalAlpha = 0.7;

var markerDrawHelper = clone(drawHelper);

markerDrawHelper.getOptions = function() {
    return [markerLineWidth, markerStrokeStyle, fillStyle, markerGlobalAlpha, globalCompositeOperation, lineCap, lineJoin, font];
}
