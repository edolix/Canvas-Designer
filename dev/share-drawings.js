// scripts on this page directly touches DOM-elements
// removing or altering anything may cause failures in the UI event handlers
// it is used only to bring collaboration for canvas-surface
var lastPointIndex = 0;
var uid;

function syncPoints(isSyncAll) {
    if (isSyncAll) {
        lastPointIndex = 0;
    }

    if (lastPointIndex == points.length) return;

    var pointsToShare = [];
    for (var i = lastPointIndex; i < points.length; i++) {
        pointsToShare[i - lastPointIndex] = points[i];
    }

    if (pointsToShare.length) {
        syncData({
            points: pointsToShare || [],
            startIndex: lastPointIndex
        });
    }

    if (!pointsToShare.length && points.length) return;

    lastPointIndex = points.length;
}

function syncData(data) {
    if (typeof _opts.callbacks.syncData === 'function') {
        _opts.callbacks.syncData(data)
    }
}
