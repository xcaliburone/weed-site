// membuat custom Event
// const eventBuatan = new Event('eventBuatanKita')

// meletakkannya pada sebuah method addEventListener
// element.addEventListener('eventBuatanKita')

const changeCaption = new Event('changeCaption')

window.addEventListener('load', function() {

    const tombol = document.getElementById('tombol')
    tombol.addEventListener('changeCaption', customEventHandler)
    // membangkitkan custom event
    tombol.addEventListener('click', function(){
        tombol.dispatchEvent(changeCaption);
    });
});

function customEventHandler(ev) {

    console.log('Event ' + ev.type + ' telah dijalankan' )
    const caption = document.getElementById('caption')
    caption.innerText = 'Anda telah membangkitkan custom event'

}