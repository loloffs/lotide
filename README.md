# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @loloffs/lotide`

**Require it:**

`const _ = require('@loloffs/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertEqual)`: asserts if two values are equal (===) or not
* `function2(eqArrays)`: return true if two arrays are equal and false if not
* `function3(assertArraysEqual)`: same as eqArrays but with added pass/fail comments
* `function1(eqObjects)`: return true if two objects are equal and false if not
* `function1(assertObjectsEqual)`: same as eqObjects but with added pass/fail comments
* `function1(countLetters)`: counts how many letters are in a given string
* `function1(findKeyByValue)`: find key in object by value
* `function1(findKey)`: find key in object by value
* `function1(head)`: returns first value in an array
* `function1(tail)`: returns all values in array except the first value
* `function1(middle)`: returns the middle value(s) in an array
* `function1(takeUntil)`: print out array until given value
* `function1(without)`: takes an array, and a second array that includes what to remove from array 1
* `function1(countOnly)`: counts only desired items
* `function1(letterPositions)`: prints out the index of every letter in a string
* `function1(map)`: calls provided function on every element in provided array
