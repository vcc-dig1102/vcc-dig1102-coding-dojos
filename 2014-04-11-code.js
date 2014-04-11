module.exports = {
    CLOSED: -1,
    OPENED: +1,

    doors : [],
    
    toggle: function(){
        if (this.CLOSED)
            return this.OPENED;
        else 
            return this.CLOSED;
    },
};
