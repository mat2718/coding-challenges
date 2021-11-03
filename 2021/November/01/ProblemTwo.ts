/**
 * Todo: 2) Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.
 *
 * * Examples:
 * *    shiftToRight(80, 3) --> 10
 *
 * *    shiftToRight(-24, 2) --> -6
 *
 * *    shiftToRight(-5, 1) --> -3
 *
 * *    shiftToRight(4666, 6) --> 72
 *
 * *    shiftToRight(3777, 6) --> 59
 *
 * *    shiftToRight(-512, 10) --> -1
 *
 * !Notes
 * !    -There will be no negative values for the second parameter y.
 * !    -This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
 */

export const shiftToRight = (a, b) => {
  let x;
  x = Math.floor(a / Math.floor(Math.pow(2, b)));
  return x;
};
