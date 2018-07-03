var quadraticHandler = {
    global: {
        ismousedown: false,
        prevX: 0,
        prevY: 0,
        controlPointX: 0,
        controlPointY: 0,
        isFirstStep: true,
        isLastStep: false
    },
    mousedown: function(e) {
        var g = this.global;

        var x = e.offsetX,
            y = e.offsetY;

        if (!g.isLastStep) {
            g.prevX = x;
            g.prevY = y;
        }

        g.ismousedown = true;

        if (g.isLastStep && g.ismousedown) {
            this.end(x, y);
        }
    },
    mouseup: function(e) {
        var g = this.global;

        var x = e.offsetX,
            y = e.offsetY;

        if (g.ismousedown && g.isFirstStep) {
            g.controlPointX = x;
            g.controlPointY = y;

            g.isFirstStep = false;
            g.isLastStep = true;
        }
    },
    mousemove: function(e) {
        var x = e.offsetX,
            y = e.offsetY;

        var g = this.global;

        tempContext.clearRect(0, 0, innerWidth, innerHeight);

        if (g.ismousedown && g.isFirstStep) {
            drawHelper.quadratic(tempContext, [g.prevX, g.prevY, x, y, x, y]);
        }

        if (g.isLastStep) {
            drawHelper.quadratic(tempContext, [g.prevX, g.prevY, g.controlPointX, g.controlPointY, x, y]);
        }
    },
    end: function(x, y) {
        var g = this.global;

        if (!g.ismousedown) return;

        g.isLastStep = false;

        g.isFirstStep = true;
        g.ismousedown = false;

        x = x || g.controlPointX || g.prevX;
        y = y || g.controlPointY || g.prevY;

        points[points.length] = ['quadratic', [g.prevX, g.prevY, g.controlPointX, g.controlPointY, x, y], drawHelper.getOptions()];
    }
};
