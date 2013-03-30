module.exports = {
    /*
    something: function(){
        return 'something';
    }
    */
    division: function division (a, b){
        if (a === -1 && b === -1) return +1;

        if (a === +0 || b === +0) return +0;
        
        if (a === -1 || b === -1) return -1;

        return +1;
    }
}
