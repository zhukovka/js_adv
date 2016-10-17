/*
 As in the rest parameters exercise, your goal is to write a Node module whose default
 export is a function. This time it will take two arguments: a lower bound and an upper bound.
 Your function should return the midpoint between those two bounds.

 However, your function should have sensible defaults. The lower bound should default to 0, and the upper bound should default to 1.

 As before, you don't need to print anything to the console. Your solution should look something like:



 We'll test your module by passing it a few different sets of arguments: sometimes none, sometimes one, sometimes two.
 Sometimes we'll pass in an explicit undefined, and you should be
 sure to treat that as the default.

 */

module.exports = (lower = 0, upper = 1) =>
(lower + upper) / 2;