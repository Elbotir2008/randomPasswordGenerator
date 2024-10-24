let lettersIndex = document.querySelector("#lettersIndex");
let result = document.querySelector("#result");
let submitBtn = document.querySelector("#submitBtn");
let checkbox = document.querySelectorAll('input[type="checkbox"]');
let form = document.querySelector("form");
// let checkboxObj = {
//   numbers: checkbox[0].id,
//   letters: checkbox[1].id,
//   symbols: checkbox[2].id,
// };
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const symbols = [
  ".",
  ",",
  "/",
  "\\",
  ">",
  "<",
  "?",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "'",
  '"',
  "|",
  "`",
  "~",
];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let randomNumbers = Math.floor(Math.random() * 10);
  let randomLetters = letters[Math.floor(Math.random() * letters.length)];
  let randomSymbols = symbols[Math.floor(Math.random() * symbols.length)];
  let boolenCheckeds = [];
  let finalResult = ""; // Yig'indi natijani saqlash uchun

  // Checkbox'larning holatini tekshirish
  for (let i of checkbox) {
    boolenCheckeds.push(i.checked);
  }

  // lettersIndex.value bo'yicha umumiy parolni yig'ish
  for (let i = 1; i <= lettersIndex.value; i++) {
    if (boolenCheckeds[0]) {
      finalResult += Math.floor(Math.random() * 10); // Tasodifiy raqam qo'shish
    }
    if (boolenCheckeds[1]) {
      finalResult += letters[Math.floor(Math.random() * letters.length)]; // Tasodifiy harf qo'shish
    }
    if (boolenCheckeds[2]) {
      finalResult += symbols[Math.floor(Math.random() * symbols.length)]; // Tasodifiy simvol qo'shish
    }

    // Agar parolning uzunligi lettersIndex.value ga teng bo'lsa, for siklini to'xtatamiz
    if (finalResult.length >= lettersIndex.value) {
      finalResult = finalResult.substring(0, lettersIndex.value); // Kerakli uzunlikni saqlash uchun kesish
      break;
    }
  }

  result.innerHTML = finalResult; // Natijani chiqarish
});
