/**
 * Created by bbmc on 2017-03-14.
 */
(function(){
    "use strict";
    describe("calculator test", function(){
        it("add �Լ� ȣ�� �� a�� b�� �ѱ�� �� �Ķ���͸� ��ģ ���� ���;��Ѵ�.", function(){
            expect(calculator.add(1, 1)).toEqual(2);
            expect(calculator.add(5, -1)).toEqual(4);
        });
    });
})();