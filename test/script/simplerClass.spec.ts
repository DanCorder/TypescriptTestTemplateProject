/// <reference path="typings/main.d.ts" />
import {SimplerClass} from "../../src/script/simplerClass";


describe("SimpleClass", function() {
    it("adds values", function() {
        const underTest = new SimplerClass();

        expect(underTest.add(3, 4)).toBe(7);
    });
});