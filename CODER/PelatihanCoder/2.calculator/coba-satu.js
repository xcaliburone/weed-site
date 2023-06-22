//Sappe
//Tugas Website

//Simple Calculator

var a = 2;
var b = 2;

var penjumlahan = a + b;
var perkalian = a * b;
var pengurangan = a - b;
var pembagian = a / b;

console.log(a + " + " + b + " = " + penjumlahan);
console.log(a + " x " + b + " = " + perkalian);
console.log(a + " - " + b + " = " + pengurangan);
console.log(a + " / " + b + " = " + pembagian);

if (penjumlahan > perkalian && penjumlahan > pengurangan && penjumlahan > pembagian) {
    console.log("hasil operasi terbesar = penjumlahan");
} else if (perkalian > penjumlahan && perkalian > pengurangan && perkalian > pembagian) {
    console.log("hasil operasi terbesar = perkalian");
} else if (pengurangan > penjumlahan && pengurangan > perkalian && pengurangan > pembagian) {
    console.log("hasil operasi terbesar = pengurangan");
} else if (pembagian > penjumlahan && pembagian > perkalian && pembagian > pengurangan) {
    console.log("hasil operasi terbesar = pembagian");
} else if (a = 2 && b == 2) {
    console.log("hasil operasi terbesar = penjumlahan dan perkalian");
}