const secretCode = 'holy cow';
let keysTyped = [];

window.addEventListener('keyup', (e) => {
  keysTyped.push(e.key);
  keysTyped.splice(-secretCode.length - 1, keysTyped.length - secretCode.length);
  if (keysTyped.join('').includes(secretCode)) {
    console.log('KEY MATCHED!');
    cornify_add();
  }
  console.log(keysTyped);
})