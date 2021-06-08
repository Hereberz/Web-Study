                  //desafio 3
var impar = 0, par = 0, positivo = 0, negativo = 0;
function teste (value){
  let resto = value%2;
  if (value % 2 == 0){
      par++;
    }
  else{
      impar++;
    }
    if (value>0)
    {
      positivo++;
    }
    if (value<0)
    {
      negativo++;
    }
}
for (i=0; i < 5; i++)
{
valor = gets();
teste(valor);
}
console.log(par + " valor(es) par(es)");
console.log(impar + " valor(es) impar(es)");
console.log(positivo + " valor(es) positivo(s)");
console.log(negativo + " valor(es) negativo(s)");

