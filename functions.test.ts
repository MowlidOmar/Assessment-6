const {shuffleArray} = require('./utils')

let testArr = [1,2,3,4]

describe('shuffleArray should', () => {
    // CODE HERE
    test("shuffleArray should return array with the same length", () => {
        test('should return argument length match', () => {
            let results = shuffleArray(testArr)
            expect(testArr.length).toEqual(results.length)

        })

        // const results = shuffleArray(arrCopy.length);
        // expect (results).toHaveLength(arrCopy.length);
    // });
// });    

  