/**
 * Created by bbmc on 2017-03-14.
 */
(function(window){
    "use strict";
    var calculator={
        add:function(a,b){
            return a+b;
        },
        minus:function(a,b){
            return a-b;
        }
    };

    window.calculator = calculator;

})(window);
