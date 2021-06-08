//desafio 4

let cem, cinq, vinte, dez, cin, dois, um;
let valor = 576;
//let value = gets();
value = valor;
cem = parseInt(valor/100);
valor = valor - (cem*100);

cinq = parseInt(valor/50);
valor = valor - (cinq*50);

vinte = parseInt(valor/20);
valor = valor - (vinte*20);

dez = parseInt(valor/10);
valor = valor - (dez*10);

cin = parseInt(valor/5);
valor = valor - (cin*5);

dois = parseInt(valor/2);
valor = valor - (dois*2);

um = valor/1;
valor = valor - (um*1);

console.log(value);
console.log(cem + " nota(s) de R$ 100,00");
console.log(cinq + " nota(s) de R$ 50,00");
console.log(vinte + " nota(s) de R$ 20,00");
console.log(dez + " nota(s) de R$ 10,00");
console.log(cin + " nota(s) de R$ 5,00");
console.log(dois + " nota(s) de R$ 2,00");
console.log(um + " nota(s) de R$ 1,00");