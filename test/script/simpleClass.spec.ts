/// <reference path="typings/main.d.ts" />
import {SimpleClass} from "../../src/script/simpleClass";


describe("SimpleClass", function() {
    it("adds the base value", function() {
        const underTest = new SimpleClass(3);

        const result = underTest.add(4);

        expect(result).toBe(7);
    });
});