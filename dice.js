var dice={
    size:4,
    count:1,
    totalRolls:0,
    roll:function(dieSize){
    var result=Math.ceil(this.size*Math.random());
    //this ---> inside dice
    this.totalRolls+=1;
    return result;
    }
};

exports.game =dice;
exports.myname="MyName";