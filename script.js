const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const lengthNumber = document.getElementById('length-number');
const lengthRange = document.getElementById('length-range');
const generateBtn = document.getElementById('generate-btn');
const passwordEl = document.getElementById('password');
const copyBtn = document.getElementById('copy-btn');
const themeSwitch = document.getElementById('theme-switch');

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
  let chars = "";
  if (uppercase.checked) chars += upperChars;
  if (lowercase.checked) chars += lowerChars;
  if (numbers.checked) chars += numberChars;
  if (symbols.checked) chars += symbolChars;

  if (chars === "") {
    alert("Please select at least one option!");
    return;
  }

  let password = "";
  for (let i = 0; i < lengthNumber.value; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  passwordEl.value = password;
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
  passwordEl.select();
  document.execCommand('copy');
  alert("Password copied to clipboard!");
});

lengthRange.addEventListener('input', () => {
  lengthNumber.value = lengthRange.value;
});

lengthNumber.addEventListener('input', () => {
  lengthRange.value = lengthNumber.value;
});

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('light', !themeSwitch.checked);
  document.body.classList.toggle('dark', themeSwitch.checked);
});
