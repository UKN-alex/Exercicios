let array = [1,3,4,0,2];
let valorInicialParaConferirVolta;
let dentroDoArray;
let voltas = 0;
let checkpoint = 0;
let i = 0 ;

for(let i = 0; i < array.length; i++) {
  if(i===0){
    valorInicialParaConferirVolta = array[i];
    dentroDoArray = array[i]
  } 
  checkpoint = dentroDoArray;

  dentroDoArray = array[dentroDoArray];
  if(valorInicialParaConferirVolta === dentroDoArray) {
    dentroDoArray = array.indexOf(checkpoint) + 1
    voltas++
  }
}
document.write(voltas);
