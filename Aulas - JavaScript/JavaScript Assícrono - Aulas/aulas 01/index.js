// Promisses
function randomNumber(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function waitHere(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  })
}

waitHere('Ih mané', randomNumber(1, 3))
  .then(msg => {
    console.log(msg);
    return waitHere('Meteu essa ?', randomNumber(1, 3));
  })
  .then(msg => {
    console.log(msg);
  })
  .catch();