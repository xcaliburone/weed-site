// dom selection

// document.getElementById()    : JS tolong carikan saya elemen yang id nya ... yang ada di dalam dokumen

const judul = document.getElementById('judul');
judul.style.color = 'brown'; //akan menambahkan style pada inline css
judul.style.backgroundColor = '#333';
judul.innerHTML = 'adhimrahman';

// document.getElementsByTagName    : JS tolong carikan saya elemen-elemen yang nama Tag nya ....

const p = document.getElementsByTagName('p'); //p jadi berbentuk array
// p[0].style.backgroundColor = 'lightblue';
// p[1].style.backgroundColor = 'lightblue';
// p[2].style.backgroundColor = 'lightblue';
// p[3].style.backgroundColor = 'lightblue';
for( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

const link = document.getElementsByTagName('a')[0];
link.style.textDecoration = 'none';

// document.getElementsByCLassName()

const p1 = document.getElementsByClassName('p1')[0]; //berbentuk array juga
// p1[0].innerHTML = 'paragraf 1 ( diubah dari JS )';
p1.innerHTML = 'paragraf 1 ( diubah dari JS )';

// document.querySelector() menghasilkan element

const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '25px';

const li2 = document.querySelector('#b ul li:nth-child(2)')
li2.style.backgroundColor = 'orange'

// document.querySelectorAll()

const pee = document.querySelectorAll('p');

for( let i = 0; i < pee.length; i++ ) {
    p[i].style.backgroundColor = '#eaeaea'
}


// mengubah node root

// const pee4 = document.querySelectorAll('p');
// pee4[3].style.backgroundColor = 'yellow'

const sectionB = document.getElementById('b');
const pee4 = sectionB.querySelector('p');
pee4.style.backgroundColor = 'yellow'


// element.setAttribute()

const judull = document.getElementsByTagName('h1')[0];
judull.setAttribute('name', 'adhim')

judull.getAttribute('id')

judull.removeAttribute('name')

// menambahkan kelas
const p2= document.querySelector('.p2')
// p2.setAttribute('class', 'label'); memang berhasil menambahkan class tapi dia menghilangkan class sebelumnya (menimpa)
p2.classList.add('label');
p2.classList.add('apaan');
p2.classList.remove('apaan'); //akan menghapus class label jika punya, kalau gapunya gpp tapi ketika aada akan dihilangkan
p2.classList.toggle('hehehe'); //akan memeriksa apakah p2 sudah punya hehehe, if belum tambahkan, if sudah ada hapus

// DOM manipulation node
const pBaru = document.createElement('p');  //membuat elemen baru
const teksPBaru = document.createTextNode('Paragraf Baru di Akhir');  //membuat isi (keduantya masih didalam memory dan tdk berhubungan)
pBaru.appendChild(teksPBaru);  //simpan tulisan kedalam paragraf
const sectionA = document.getElementById('a'); //deklarasi sectionA terlebih dahulu
sectionA.appendChild(pBaru); //simpan pBaru di akhir section A


const listBaru = document.createElement('li');      //membuat elemen baru
const teksLiBaru = document.createTextNode('list item baru nyelip');    //membuat teks baru
listBaru.appendChild(teksLiBaru);       //simpan teks kedalam paragraf
const ul = document.querySelector('section#b ul');  //deklarasi ul sebagai parent nya
// const list2 = document.querySelector('section#b ul li:nth-child(2)');
const list2 = ul.querySelector('li:nth-child(2)');  //deklarasi li2 sebagai elemen setelahnya / berikutnya
ul.insertBefore(listBaru, li2);


// const sectionA = document.getElementById('a'); //deklarasi sectionA terlebih dahulu //ambil parent nya
const linkk = document.getElementsByTagName('a')[0]; //ambil element yang ingin dihapus
sectionA.removeChild(linkk);

const sectionC = document.getElementById('c');  //menangkap parent
const p5 = sectionC.querySelector('p');    //menangkap elemen yang ingin diubah
const h2Baru = document.createElement('h2'); //membuat element baru
const teksH2Baru = document.createTextNode('Paragraf tergantikan'); //membuat teks baru
h2Baru.appendChild(teksH2Baru); //simpan teks kedalam paragraf
sectionC.replaceChild(h2Baru, p5); //replace

pBaru.style.backgroundColor = 'lightgreen';
listBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';



// DOM EVENTS

// event handler
const pe2 = document.querySelector('.p2');
function pee2() {
    pe2.style.backgroundColor = 'lightblue';
}

const p3 = document.querySelector('.p3');
p3.onclick = pee3;
function pee3() {
    p3.style.backgroundColor = 'salmon';
}

// add event listener
const pe4 = document.querySelector('section#b p');
pe4.addEventListener('click', function() {
    alert('item list ditambahkan');

    const ul = document.querySelector('section#b ul'); //ambil parentnya
    const listNew = document.createElement('li');    //bikin element barunya
    const teksLiNew = document.createTextNode('item baru'); //membuat teks baru
    listNew.appendChild(teksLiNew); // memasukkan teks kedalam element baru
    ul.appendChild(listNew); // memasukkan element baru kedalam parent
}); // JS carikan elemen pe4, lalu ketika ada event click, lakukan sesuatu (jalankan function)