//Função recursiva
function recursiva(max) {
  if (max >= 15) return
    max++
    console.log(max);
    recursiva(max);
}

recursiva(0)