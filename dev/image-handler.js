var imageHandler = {
    lastImageURL: null,
    lastImageIndex: 0,
    images: [],

    ismousedown: false,
    prevX: 0,
    prevY: 0,
    mousedown: function(e) {
        var x = e.offsetX,
            y = e.offsetY;
        this.prevX = x;
        this.prevY = y;
        this.ismousedown = true;
    },
    mouseup: function(e) {
        var x = e.offsetX,
            y = e.offsetY;

        if (this.ismousedown) {
            points[points.length] = ['image', [imageHandler.lastImageURL, this.prevX, this.prevY, x - this.prevX, y - this.prevY, imageHandler.lastImageIndex], drawHelper.getOptions()];

            this.ismousedown = false;
        }

    },
    mousemove: function(e) {
        var x = e.offsetX,
            y = e.offsetY;

        if (this.ismousedown) {
            tempContext.clearRect(0, 0, innerWidth, innerHeight);

            drawHelper.image(tempContext, [imageHandler.lastImageURL, this.prevX, this.prevY, x - this.prevX, y - this.prevY, imageHandler.lastImageIndex]);
        }
    }
};
