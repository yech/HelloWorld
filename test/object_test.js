/**
 * Created with JetBrains WebStorm.
 * User: yech
 * Date: 12-8-31
 * Time: 上午11:09
 * To change this template use File | Settings | File Templates.
 */
TestCase("objectTest",{
    setUp:function(){
        this.superType = new SuperType;
        this.subType = new SubType;

    },
    tearDown:function(){
        delete this.subType;
        delete this.superType;
    },

    "test function define":function(){
        assertEquals(SuperType,SuperType.prototype.constructor);
        assertEquals(Object.prototype,SuperType.prototype.__proto__);
    },

    "test new object":function(){
        assertEquals(SuperType.prototype,this.superType.__proto__);
        assertEquals(SubType.prototype,this.subType.__proto__);
    },

    "test inherit":function(){
        assertEquals(SuperType.prototype,SubType.prototype.__proto__);
        assertEquals(SubType.prototype,this.subType.__proto__);
        assertEquals(SuperType.prototype,this.subType.__proto__.__proto__);
        assertEquals(Object.prototype,this.subType.__proto__.__proto__.__proto__);
        assertEquals(null,this.subType.__proto__.__proto__.__proto__.__proto__);

    }


});
