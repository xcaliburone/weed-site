let number1=0 //inisialisasi number1
let number2=0 //inisialisasi number2

const Operation=["Addition","Substraction","Multiplication","Division"] //inisialisasi Nama Operator dalam bentuk array
const Result=[(number1+number2),(number1-number2),(number1*number2),(number1/number2)]; //Inisialisasi Hasil dari Operasi

console.log("Number 1:",number1)
console.log("Number 2:",number2)

for (let i =0 ; i<Operation.length;i++){ //mencetak Nama Operator dan Hasilnya
  console.log(`${Operation[i]} of number1 and number2 is : ${Result[i]}`)
}

let greatestValue= Result[0] //Inisialisasi Nilai Terbesar sementara
for (let i=1;i<Operation.length;i++){
  if (Result[i]>greatestValue){//mengecek, apabila index ke i lebih besar dari nilai terbesar sementara, maka nilai terbesar sementara akan diganti dengan result index ke-i
    greatestValue=Result[i]
  }
}
console.log("Greatest Value : ",greatestValue)

let greatestOperation=[];//inisialisasi Operasi Terbesar
for (let i=0;i<Operation.length;i++){
  if (Result[i]===greatestValue){//Mengecek untuk setiap index dari result, jika memiliki nilai yang sama dengan nilai terbesar
    greatestOperation.push(Operation[i])//push string dari array Operation (sesuai dengan index dari result yang dibandingkan) ke dalam greatest Operation
  }//untuk antisipasi apabila terdapat beberapa operasi yang memiliki hasil yg sama (Ex: 2 & 2, 0 & 0)
}

console.log("Operations that get the Highest Results: ");
console.log(greatestOperation);

// CATATAN 

function hai (a) {
  const halo = 0
  return halo;
}

const hai = (a) => {
  const halo = 0
  return halo;
}

