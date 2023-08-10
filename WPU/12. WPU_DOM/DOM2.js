const tombolUbahWarna = document.getElementById('tombolWarna');    // tangkap tombol
// const body = document.getElementsByTagName('body')[0];    // tangkap elemen yg akan dituju (target)
tombolUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'grey';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}


const tombolRandom = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tombolRandom.appendChild(teksTombol);
tombolRandom.setAttribute('type', 'button');
tombolRandom.setAttribute('class', 'tombol');
tombolUbahWarna.after(tombolRandom);

tombolRandom.addEventListener('click', function() {
    const r = Math.round( Math.random() * 255 + 1 );
    const g = Math.round( Math.random() * 255 + 1 );
    const b = Math.round( Math.random() * 255 + 1 );
    // console.log(r)
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});


const sliderMerah = document.querySelector('input[name=sMerah]');
const sliderHijau = document.querySelector('input[name=sHijau]');
const sliderBiru = document.querySelector('input[name=sBiru]');
sliderMerah.addEventListener('input', function() {
    // console.log(sliderMerah.value);
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})
sliderHijau.addEventListener('input', function() {
    // console.log(sliderMerah.value);
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})
sliderBiru.addEventListener('input', function() {
    // console.log(sliderMerah.value);
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})


document.body.addEventListener('mousemove', function(event) {
    // posisi mouse x dan y
    // event.clientX
    // console.log(event.clientX);
    // console.log(window.innerWidth);
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)'
})