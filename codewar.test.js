const { default: expect } = require("expect");
const  formatDuration = require("./codewar");
const reverseArray = require("./codewar");

test.only("Returns human readable time from seconds", () => {
    expect(formatDuration(3662)).toMatch("1 hour, 1 minute and 2 seconds");
});

test("Reverse the A array K times", () => {
    expect(reverseArray([1,2,3,4], 2)).toEqual([3,4,1,2]);
});