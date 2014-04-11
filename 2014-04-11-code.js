module.exports = {
    CLOSED: -1,
    OPENED: +1,

    doors : [-1, -1, -1],
    
    toggle: function(door){
        if (door === this.CLOSED) return this.OPENED;
        
        if (door === this.OPENED) return this.CLOSED;
    },
    
    walk : function() {
        for (var door = 0; door <= 3; door++) {
            this.doors[door] = this.OPENED;
        }
    },
};
