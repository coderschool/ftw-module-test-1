const { expect, test } = require('@jest/globals');
const { bmi, countNormal, countTypes } = require('./js-1.js');


// BMI Tests
test('BMI returns normal for 188, 85', () => {
    expect(bmi(188, 85)).toEqual("normal")
});
test('BMI returns underweight for 150, 35', () => {
    expect(bmi(150, 35)).toEqual("underweight")
});
test('BMI returns overweight for 180, 90', () => {
    expect(bmi(180, 90)).toEqual("overweight")
});
test('BMI returns obese for 100, 100', () => {
    expect(bmi(100, 100)).toEqual("obese")
});

// Count Normal Tests
test('CountNormal returns 2 for 24,25,22,30.1,18', () => {
    expect(countNormal([24, 25, 22, 30.1, 18])).toEqual(2);
});
test('CountNormal returns 1 for 18.5,31', () => {
    expect(countNormal([18.5, 31])).toEqual(1);
});
test('CountNormal returns 0 for empty', () => {
    expect(countNormal([])).toEqual(0);
});

//CountTypes Tests
test('CountTypes countTypes([20,24,30,31.1,18]', () => {
    expect(countTypes([20,24,30,31.1,18])).toEqual({
        underweight: 1,
        normal: 2,
        oberweight: 1,
        obese: 1
    })
});
test('CountTypes countTypes([20,24,30,31.1,18]', () => {
    expect(countTypes([20,24])).toEqual({
        underweight: 0,
        normal: 2,
        oberweight: 0,
        obese: 0
    })
});
