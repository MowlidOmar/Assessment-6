/* const {shuffleArray} = require('./utils')

let testArr = [10, 11, 23, 45];

describe('shuffleArray should', () => {
   
    test("shuffleArray should return array with the same length", () => {
        test('should return argument length match', () => {
            let results = shuffleArray(testArr)
             expect(testArr.length).toEqual(results.length)

 
 })
 
   CODE HERE */

const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  test("should be an array", () => {
    const testArray = [10, 11, 23, 45];
    const testVar = shuffleArray(testArray);
    expect(Array.isArray(testVar)).toBe(true);
  });
  test("should be all the same items in the array", () => {
    const testArray = [10, 11, 23, 45];
    const testVar = shuffleArray(testArray);
    expect(testArray.length).toEqual(testVar.length);
  });
});





  
