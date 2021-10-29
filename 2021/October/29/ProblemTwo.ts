/**
 * TODO: 2) Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.
 *
 ** Examples
 ** getHashTags("How the Avocado Became the Fruit of the Global Trade")
 ** --> ["#avocado", "#became", "#global"]
 **
 ** getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
 ** --> ["#christmas", "#probably", "#will"]
 **
 ** getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
 ** --> ["#surprise", "#parents", "#fruit"]
 **
 ** getHashTags("Visualizing Science")
 ** --> ["#visualizing", "#science"]
 **
 *! Notes:
 *! If the title is less than 3 words,
 *! just order the words in the title by length in descending order
 *! (see example #4).
 *
 *! Punctuation does not count towards a word's length.
 */

function removePunctuation(string) {
  string = string.replace("!", "");
  string = string.replace("?", "");
  string = string.replace('"', "");
  string = string.replace(".", "");
  string = string.replace(",", "");
  return string;
}

const getHashTags = (headline) => {
  let array = headline.split(" ");
  //set variables
  let finalAnswer = [];

  // loop through array and remove any punctuation
  for (let i = 0; i < array.length; i++) {
    array[i] = removePunctuation(array[i]);
  }

  let counter = Math.min(3, array.length);
  while (counter > 0) {
    let maxString = "";
    let currentInt = -1;

    for (let i = 0; i < array.length; i++) {
      if (array[i].length > maxString.length) {
        maxString = array[i];
        currentInt = i;
      }
    }
    // remove maxString from array
    array.splice(currentInt, 1);
    maxString = "#" + maxString;
    maxString = maxString.toLowerCase();
    finalAnswer.push(maxString);
    counter--;
  }
  return finalAnswer;
};

export default getHashTags;
// console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
// console.log(getHashTags("Visualizing Science"));
