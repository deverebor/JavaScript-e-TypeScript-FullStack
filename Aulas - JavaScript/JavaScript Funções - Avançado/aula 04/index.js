//Funções de callback

function rand(min = 1000, max = 3000) {
  return Math.floor(Math.random() * (max - min) + min);
}

function f1() {
  setTimeout(() => {
    console.log("f1");
  }, rand())
}

function f2() {
  setTimeout(() => {
    console.log("f2");
  }, rand())
}

function f3() {
  setTimeout(() => {
    console.log("f3");
  }, rand())
}

f1()
f2()
f3()
console.log('fim ?')