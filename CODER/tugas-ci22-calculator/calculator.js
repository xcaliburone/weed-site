const a = 2, b = 4;

var penjumlahan = a + b;
var perkalian = a * b;
var pengurangan = a - b;
var pembagian = a / b;


let operation = penjumlahan;
if (pengurangan > operation){
    operation = pengurangan;
}else if(perkalian > operation){
    operation = perkalian;
}else if(pembagian > operation){
    operation = pembagian;
}
console.log (`Hasil operasi terbesar = ${operation}`);