# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cvaghasia/lotide`

**Require it:**

`const _ = require('@cvaghasia/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Finds head element of the given array input
* `tail`: Finds tail array of the given array input
* `middle`: finds middle element/array based on input array (even/odd)
* `assertEqual`: checks if both input and output have a perfect match.
* `assertArrayEqual`: it takes in two arrays and prints an appropriate message to the console.
* `eqarray`: finds middle element/array based on input array (even/odd)
