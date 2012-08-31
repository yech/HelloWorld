/**
 * Created with JetBrains WebStorm.
 * User: yech
 * Date: 12-8-28
 * Time: 上午10:57
 * To change this template use File | Settings | File Templates.
 */


TestCase("helloTest",{
    setUp:function(){
        this.param = true;
    },
    tearDown:function(){
        delete this.param;

    },

    "test true should return 1":function(){
        assertEquals(1,giveMeNumber(this.param));
    },
    "test false should return 0":function(){
        assertEquals(0,giveMeNumber(false));
    },

    "test undefined should return 0":function(){
        assertEquals(0,giveMeNumber());
    },

    "test name game should return game":function(){
        assertEquals("game",anotherGame("game"));
    },

    "test no param should return default game":function(){
        assertEquals("default game",anotherGame());
    }



});