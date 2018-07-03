var arrowHandler = {
    ismousedown: false,
    prevX: 0,
    prevY: 0,
    arrowSize: 10,
    mousedown: function(e) {
        this.prevX = e.offsetX;
        this.prevY = e.offsetY;
        this.ismousedown = true;
    },
    mouseup: function(e) {
        if (this.ismousedown) {
            points[points.length] = ['arrow', [this.prevX, this.prevY, e.offsetX, e.offsetY], drawHelper.getOptions()];
            this.ismousedown = false;
        }
    },
    mousemove: function(e) {
        if (this.ismousedown) {
            tempContext.clearRect(0, 0, innerWidth, innerHeight);
            drawHelper.arrow(tempContext, [this.prevX, this.prevY, e.offsetX, e.offsetY]);
        }
    }
};
