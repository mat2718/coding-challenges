/**
 *  TODO: 1) This is based on Helen Yu's Making a Box challenge. This challenge is the same except that instead of an array of strings, your function should output a matrix of characters.
 ** Examples:
 *
 ** charBox(1) --> [
 ** ["#"]
 ** ]
 *
 ** charBox(4) --> [
 ** ["#", "#", "#", "#"],
 ** ["#", " ", " ", "#"],
 ** ["#", " ", " ", "#"],
 ** ["#", "#", "#", "#"]
 ** ]
 *
 ** charBox(2) --> [
 ** ["#", "#"],
 ** ["#", "#"]
 ** ]
 *
 * !Notes
 * !As an added bonus, try making charBox(0) output [[]] and make any strings, non-integers, and negative numbers output -1.
 *
 * !Note:
 * !A fraction is simplified if there are no common factors (except 1) between the numerator and the denominator. For example, 4/6 is not simplified, since 4 and 6 both share 2 as a factor.
 */
const charBox = (number) => {
  // check if the number equals zero
  if (number === 0) {
    return [[]];
  }
  let finalAnswer = [];

  for (let i = 1; i <= number; i++) {
    if (i === 1 || i === number) {
      let arr = [];
      for (let j = 0; j < number; j++) {
        arr.push("#");
      }
      finalAnswer.push(arr);
    } else {
      let arr = [];
      for (let j = 0; j < number; j++) {
        if (j === 0 || j === number - 1) {
          arr.push("#");
        } else {
          arr.push(" ");
        }
      }
      finalAnswer.push(arr);
    }
  }
  console.log(finalAnswer);
  return finalAnswer;
};

export default charBox;
