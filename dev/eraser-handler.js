var eraserHandler = {
    ismousedown: false,
    prevX: 0,
    prevY: 0,
    mousedown: function(e) {
        var x = e.offsetX,
            y = e.offsetY;

        this.prevX = x;
        this.prevY = y;

        this.ismousedown = true;

        tempContext.lineCap = 'round';
        drawHelper.line(tempContext, [this.prevX, this.prevY, x, y]);

        points[points.length] = ['line', [this.prevX, this.prevY, x, y], drawHelper.getOptions()];

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
            drawHelper.line(tempContext, [this.prevX, this.prevY, x, y]);

            points[points.length] = ['line', [this.prevX, this.prevY, x, y], drawHelper.getOptions()];

            this.prevX = x;
            this.prevY = y;
        }
    }
};
