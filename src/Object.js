var SuperType =function(){
    this.p1 = true;
};

var SubType = function(){
    SuperType.call(this);
    this.p2 = false;
};

SubType.prototype = new SuperType;