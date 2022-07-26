
//const { default: TestRunner } = require("jest-runner");
// const { default: test } = require("node:test");
//import the exported addFive function from "testing.js"
const addFive = require('./testing');

test('returns the number plus 5', ()=>{
    expect(addFive(1)).toBe(6);
})
