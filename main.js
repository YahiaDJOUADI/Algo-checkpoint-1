let lengthString = (string) => string.length;
console.log("the length is" + " " + lengthString("HALA MADRID."));
let numberString = (string) => string.split(" ").length;
console.log("the number of string" + " " + numberString("Yahia is the best."));

let countVowels = (sentences) => {
  let vowelN = 0;
  let vowels = "aeuioAOIUE";
  for (let sentence of sentences) {
    if (vowels.includes(sentence)) {
      vowelN++;
    }
  }
  return vowelN;
};
console.log("the vowels is" + " " + countVowels("Yahia."))

