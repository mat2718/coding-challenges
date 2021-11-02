/**
 * Todo: 1) Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.
 *
 * * Examples:
 * *      zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) --> [1, 2, 4, 5, 0, 0, 0]
 *
 * *      zeroesToEnd([0, 0, 2, 0, 5]) --> [2, 5, 0, 0, 0]
 *
 * *      zeroesToEnd([4, 4, 5]) --> [4, 4, 5]
 *
 * *      zeroesToEnd([0, 0]) --> [0, 0]
 *
 * !Notes:
 * !     -You must mutate the original array.
 * !     -Keep the relative order of the non-zero elements the same.
 */

//? creates a new array with the zeroes at the end
export function zeroesToEnd(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      answer.push(arr[i]);
    } else {
      continue;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      answer.push(arr[i]);
    } else {
      continue;
    }
  }
  return answer;
}

//? mutates the original array and pushes the zeroes to the end
export function pushZerosToEnd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[count++] = arr[i];
    }
  }
  while (count < arr.length) {
    arr[count++] = 0;
  }
  return arr;
}
