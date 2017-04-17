/**
 * Created by bbmc on 2017-03-14.
 */
(function(){
    "use strict";
    describe("calculator test", function(){
        it("add 함수 호출 시 a와 b를 넘기면 두 파라메터를 합친 값이 나와야한다.", function(){
            expect(calculator.add(1, 1)).toEqual(2);
            expect(calculator.add(5, -1)).toEqual(4);
        });
    });
})();