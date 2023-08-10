
function getPilihanKomputer() {
    const comp = Math.random();

    if( comp < 0.34 ) return 'batu';
    if( comp >= 0.34 && comp < 0.67 ) return 'gunting';
    return 'kertas';
}

function getHasil(comp, player) {
    if( player == comp ) return 'SERI!';
    if( player == 'batu' ) return ( comp == 'gunting' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'gunting' ) return ( comp == 'batu' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'kertas' ) return ( comp == 'gunting' ) ? 'KALAH' : 'MENANG!';
}

function acak() {
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['batu', 'gunting', 'kertas']
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function() {
        if( new Date().getTime() - waktuMulai > 1000 ) {
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', '/BIG-ASSETS/import/' + gambar[i++] + '.png')
        if( i == gambar.length ) i = 0;
    }, 100) // fungsi untuk melakukan sesuatu scr berulang-ulang selama waktu interval tertentu
}

// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pBatu.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer)
//     // console.log('comp : ' + pilihanKomputer)
//     // console.log('player : ' + pilihanPlayer)
//     // console.log('hasil : ' + hasil)
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', '/BIG-ASSETS/import/' + pilihanKomputer + '.png')
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// const pGunting = document.querySelector('.gunting');
// pGunting.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGunting.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer)
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', '/BIG-ASSETS/import/' + pilihanKomputer + '.png')
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pKertas.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer)
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', '/BIG-ASSETS/import/' + pilihanKomputer + '.png')
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

const pilihan = document.querySelectorAll('li img');
pilihan.forEach( function(pil) {
    pil.addEventListener('click', function() {
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer)

        acak();

        setTimeout(function() {
            const imgKomputer = document.querySelector('.img-komputer');
            imgKomputer.setAttribute('src', '/BIG-ASSETS/import/' + pilihanKomputer + '.png')
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);
    });
});