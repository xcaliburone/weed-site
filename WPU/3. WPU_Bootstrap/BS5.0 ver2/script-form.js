const scriptURL = 'https://script.google.com/macros/s/AKfycbwmHcGtZ6cHSOZ1YdZzr47Ee4JnhABQK_YxWMvhKYAZp2cxVyW2CIExzLBaqW7zOPTVHA/exec'
const form = document.forms['xca-contact-form']

const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const myAlert = document.querySelector('.my-alert')

form.addEventListener('submit', e => {
  e.preventDefault();

    // ketika tombol submit di klik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none')
    // js carikan saya elemen yang bernama btnLoading, kalau sudah ketemu lihat di dalalm classList (didalam daftar class) nya. ada tidak class yang nama nya d-none. kalau ada, hilangin. kalau gaada, tambahin.
    btnKirim.classList.toggle('d-none')

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // tampilkan tombol kirim, hilangkan tombol loading
        btnLoading.classList.toggle('d-none')
        btnKirim.classList.toggle('d-none')
        // tampilkan alert
        myAlert.classList.toggle('d-none')
        // reset form
        form.reset()
        console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
});