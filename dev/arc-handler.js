var arcHandler = {
    global: {
        ismousedown: false,
        prevX: 0,
        prevY: 0,
        prevRadius: 0,
        isCircleDrawn: false,
        isCircledEnded: true,
        isClockwise: false,
        arcRangeContainer: null,
        arcRange: null
    },
    mousedown: function(e) {
        var g = this.global;
        var x = e.offsetX,
            y = e.offsetY;
        g.prevX = x;
        g.prevY = y;
        g.ismousedown = true;
    },
    mouseup: function(e) {
        var g = this.global;

        var x = e.offsetX,
            y = e.offsetY;

        if (g.ismousedown) {
            if (!g.isCircleDrawn && g.isCircledEnded) {
                var prevX = g.prevX,
                    prevY = g.prevY,
                    radius = ((x - prevX) + (y - prevY)) / 3;
                g.prevRadius = radius;
                g.isCircleDrawn = true;
                g.isCircleEnded = false;
                points[points.length] = ['arc', [prevX + radius, prevY + radius, radius, (2 * Math.PI), 1], drawHelper.getOptions()];
                this.end();
            } else if (g.isCircleDrawn && !g.isCircleEnded) {
                this.end();
            }
        }

        g.ismousedown = false;

        this.fixAllPoints();
    },
    mousemove: function(e) {
        var g = this.global;

        var x = e.offsetX,
            y = e.offsetY;

        var ismousedown = g.ismousedown,
            isCircleDrawn = g.isCircleDrawn,
            isCircleEnded = g.isCircledEnded;

        if (ismousedown) {
            if (!isCircleDrawn && isCircleEnded) {
                var prevX = g.prevX,
                    prevY = g.prevY,
                    radius = ((x - prevX) + (y - prevY)) / 3;

                tempContext.clearRect(0, 0, 2000, 2000);

                drawHelper.arc(tempContext, [prevX + radius, prevY + radius, radius, Math.PI * 2, true]);
            }
        }
    },
    fixAllPoints: function() {
        var toFixed = this.toFixed;

        for (var i = 0; i < points.length; i++) {
            var p = points[i],
                point;
            if (p[0] === 'arc') {
                point = p[1];
                points[i] = ['arc', [toFixed(point[0]), toFixed(point[1]), toFixed(point[2]), toFixed(point[3]), point[4]], p[2]];
            }
        }
    },
    init: function() {

    },
    toFixed: function(input) {
        return Number(input).toFixed(1);
    },
    end: function() {
        var g = this.global;
        g.isCircleDrawn = false;
        g.isCircleEnded = true;
        drawHelper.redraw();
    }
};

arcHandler.init();
