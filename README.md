# Test-Driven Development Project

This project is a demonstration of my skills in JavaScript, learned at my bootcamp. It includes various functions and unit tests to ensure their correct operation.

## Project Overview

This project focuses on implementing various functions and unit tests using the Jest module of NodeJS. The goal is to ensure that the function implementations are correct, following the requirements outlined in each statement. Additionally, it encourages a test-driven development approach.


## Development

In the unit tests, you will find the intentional use of fail('Teste vazio!'), designed to make the test fail when not implemented. This code should be removed as soon as you start writing the unit test. Omitting fail('Teste vazio!') in blocks without test code prevents false positives, ensuring the function doesn't pass without a valid test.

- **average():** This function receives an array of variable size and returns the average of the received values. If the function receives any non-numeric value or an empty array, the value `undefined` is returned.
- **numbers():** This function receives an array of variable size and returns `true` if all parameters are of type 'number' and `false` otherwise.
- **vqv():** This function receives your name and your age and returns a paragraph.
- **circle():** This function receives the radius of a circle and returns an object containing its information: Radius, Area, and Circumference. If a radius is not specified, the function returns `undefined`.
- **createStudent():** This function receives a name as a parameter and returns an object containing two keys.
- **productDetails():** This function receives two strings that represent product names and returns an array containing two objects with the details of the respective products.
- **calculator():** This function receives two integer numbers as a parameter and returns an object with the following keys: sum, mult, div, sub.
- **myCounter():** This function has two nested loops that insert values into an array. As we can see, they keep adding values to the array until their stop condition.
- **getCharacter():** This function receives a string that represents the name of a character and returns an object containing its name, its class, and its phrases.
- **createMenu():** This function, as well as its test cases, will guide you through a rich process of Test Driven Development or TDD.

## Project Requirements

The project meets all the requirements specified in the bootcamp project readme. It has been developed with a focus on ES6 and Unit Tests.

## Feedback

I would love to hear your feedback on my project! Feel free to share your thoughts and suggestions.

## Portfolio

Check out my [portfolio](my-folio-weld.vercel.app/) for more of my work!
