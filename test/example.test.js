// IMPORT MODULES under test here:
import { generateNumber, tooLow, tooHigh, correct } from '../app.js';

const test = QUnit.test;

test(generateNumber, (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = Number;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateNumber;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test(tooLow, (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = (Number < generateNumber);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test(tooHigh, (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = (Number > generateNumber);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test(correct, (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = (Number === generateNumber);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});