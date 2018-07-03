var rectHandler = {
    ismousedown: false,
    prevX: 0,
    prevY: 0,
    mousedown: function(e) {
        this.prevX = e.offsetX;
        this.prevY = e.offsetY;
        this.ismousedown = true;
    },
    mouseup: function(e) {
        if (this.ismousedown) {
            points[points.length] = ['rect', [this.prevX, this.prevY, e.offsetX - this.prevX, e.offsetY - this.prevY], drawHelper.getOptions()];
            this.ismousedown = false;
        }
    },
    mousemove: function(e) {
        if (this.ismousedown) {
            tempContext.clearRect(0, 0, innerWidth, innerHeight);
            drawHelper.rect(tempContext, [this.prevX, this.prevY, e.offsetX - this.prevX, e.offsetY - this.prevY]);
        }
    }
};
