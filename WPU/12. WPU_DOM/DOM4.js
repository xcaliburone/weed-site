
                    // const close = document.querySelector('.close');
                    // const card = document.querySelector('.card');
                    // close.addEventListener('click', function() {
                    //     card.style.display = 'none';
                    // });

// DIATAS HANYA BISA DILAKUKAN KETIKA CARD / KARTU HANYA ADA SATU. KETIKA CARD LEBIH DARI SATU MAKA AKAN BANYAK ERROR TERJADI

// const close = document.querySelectorAll('.close');

                    // for( let i = 0; i < close.length; i++ ) {
                    //     close[i].addEventListener('click', function(e) {
                    //         // alert('tombol ke-' + i)
                    //         // close[i].parentElement.style.display = 'none' // AMBIL ELEMENT CLOSE YG SEDANG DI KLIK, LALU TELUSURI SIAPA PARENT NYA
                    //         // console.log(e.target)
                    //         e.target.parentElement.style.display = 'none';
                    //     })
                    // }

// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation(); //untuk menghentikan efek dari event bubbling
//     });
// });

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement);  //card
// console.log(nama.parentElement.parentElement);  //container
// console.log(nama.nextSibling); //yg dia dapat itu text karena membacannya 'enter' sebagai node
// console.log(nama.nextElementSibling);

// const cards = document.querySelectorAll('.card'); //memanggil semua kartu yg dipunya
// cards.forEach(function(card) { //setiap element dikasih nama card
//     card.addEventListener('click', function(e) { //setiap card di klik, jalankan fungsi berikut
//         alert('OK')
//         // ketika tombol close di klik, dia juga terkena dampan dari fungsi ini
//         // jadi event bubbling itu ketika kita punya event di element dan parentnya maka keduanya akan dijalankan dan seterusnya
//         // lalu bagaimana cara menghentikan gelembung ini?
//     })

// })

// yang diatas kurang efektif. kenapa? karena memang semua berjalan aman lancar tapi ketika element atau card ditambah secara realtime
//      (dari konsol), element yang baru ditambahkan tersebut tidak akan terkenda dampak dari JS

const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    // console.log(e.target)
    if( e.target.className == 'close' ) { //jika yang kita klik (e.target) punya nama class (.close), maka
        e.target.parentElement.style.display = 'none';
    }
})