// memanipulasi elemen menggunakan method setAttribute

// memanipulasi menggunakan innerText dan innerHTML
const dicoding = document.getElementById('dicodingLink');
dicoding.innerText = "Belajar programming di Dicoding"
dicoding.innerHTML = "<i>Belajar programming di Dicoding</i>"

// memanipulasi style konten menggungakan style.property
const buttons = document.getElementsByClassName('button');

for (const button of buttons) {
    // console.log(button.children[0])
    button.children[0].style.borderRadius = '6px'
}