var eraseAllHandler = {
    ismousedown: false,

    mousedown: function(e) {
        this.ismousedown = true;
    },

    mouseup: function(e) {
        this.ismousedown = false;
    },

    mousemove: function(e) {
        if (this.ismousedown) {
            console.log('eraseAllHandler yo')
        }
    }
}
