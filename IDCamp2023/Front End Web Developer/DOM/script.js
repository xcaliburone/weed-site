const newElement = document.createElement('li')
newElement.innerText = 'Selamat Menikmati !'

const daftar = document.getElementById('daftar')
daftar.appendChild(newElement)

const elementAwal = document.createElement('li')
elementAwal.innerText = 'Hidupkan Kompor.'

const itemAwal = document.getElementById('awal')

daftar.insertBefore(elementAwal, itemAwal)