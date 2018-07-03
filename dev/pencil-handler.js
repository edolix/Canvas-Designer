var pencilHandler = {
    ismousedown: false,
    prevX: 0,
    prevY: 0,
    mousedown: function(e) {
        this.ismousedown = true;
        this.prevX = e.offsetX;
        this.prevY = e.offsetY;
        tempContext.lineCap = 'round';
        pencilDrawHelper.line(tempContext, [this.prevX, this.prevY, e.offsetX, e.offsetY]);
        points[points.length] = ['line', [this.prevX, this.prevY, e.offsetX, e.offsetY], pencilDrawHelper.getOptions()];
        this.prevX = e.offsetX;
        this.prevY = e.offsetY;
    },
    mouseup: function(e) {
        this.ismousedown = false;
    },
    mousemove: function(e) {
        if (this.ismousedown) {
            tempContext.lineCap = 'round';
            pencilDrawHelper.line(tempContext, [this.prevX, this.prevY, e.offsetX, e.offsetY]);
            points[points.length] = ['line', [this.prevX, this.prevY, e.offsetX, e.offsetY], pencilDrawHelper.getOptions()];
            this.prevX = e.offsetX;
            this.prevY = e.offsetY;
        }
    }
}

var pencilLineWidth = document.getElementById('pencil-stroke-style').value,
    pencilStrokeStyle = '#' + document.getElementById('pencil-fill-style').value;

var pencilDrawHelper = clone(drawHelper);

pencilDrawHelper.getOptions = function() {
    return [pencilLineWidth, pencilStrokeStyle, fillStyle, globalAlpha, globalCompositeOperation, lineCap, lineJoin, font];
}
