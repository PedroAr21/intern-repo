const sum = require('./clean_code_UnitTestForCleanCode')

test('Properly adds two numbers', () => {
    expect(
        sum(1, 2)
    ).toBe(3)
})

// function cloneArray(array){
//     return [...array]
// }

// module.exports = cloneArray