const storageKey = 'STORAGE_KEY';
const submitAction = document.getElementById('form-data-user');
const destroyButton = document.getElementById('destroy-data-button');

// memeriksa apakah fitur web storage didukung oleh browser melalui sebuah fungsi bernama checkForStorage()
function checkForStorage() {
    return typeof (Storage) !== 'undefined';
}

// Fungsi ini untuk membuat item storage, membuat nilai awalnya serta untuk memodifikasi nilai pada item storage-nya juga.
function putUserList(data) {
    if (checkForStorage()) {
        let userData = []; // membuat variabel yang akan menampung semua data pada item storage.

        if (localStorage.getItem(storageKey) !== null) { // Jika item storage yang digunakan belum dibuat, akan memberikan nilai array kosong ke userData
            userData = JSON.parse(localStorage.getItem(storageKey)); // mengambil data yang disimpan dan memasukkannya ke fungsi JSON.parse().
            // berguna untuk mengonversi sebuah JSON yang ditulis dalam bentuk string ke bentuk JSON "asli". Masih ingat materi "Memodifikasi Item Storage" bahwa data apa pun yang disimpan ke web storage akan menjadi bentuk string? Nah, untuk mengubah sebuah JSON yang ditulis dalam bentuk string ke bentuk JSON "asli", gunakan fungsi JSON.parse().
        }

        userData.unshift(data); // akan memasukkan nilai yang disimpan di parameter data ke elemen paling depan array yang tersimpan di variabel userData
        if (userData.length > 5) { // untuk menghilangkan data pada elemen paling terakhir jika panjang userData melebihi 5
            userData.pop();
        }

        localStorage.setItem(storageKey, JSON.stringify(userData)); // menyimpan data tersebut ke dalam local storage melalui method setItem()
        // Sebelum disimpan, kita harus mengubah array yang berisi data-data JSON ke dalam bentuk string terlebih dahulu. Hal ini bisa kita capai melalui fungsi JSON.stringify().
    }
}

// untuk mendapatkan semua data pada item storage yang berisi data user yang sudah di-input.
function getUserList() {
    if (checkForStorage()) {
        return JSON.parse(localStorage.getItem(storageKey)) || []; // mengembalikan nilai array dari localStorage ketika sudah memiliki nilai sebelumnya melalui JSON.parse()
    } else {
        return []; // akan mengembalikan nilai array kosong.
    }
}

// Fungsi untuk merender data user pada tabel HTML.
function renderUserList() {
    const userData = getUserList();
    const userList = document.querySelector('#user-list-detail');

    userList.innerHTML = '';
    for (let user of userData) {
        let row = document.createElement('tr');
        // row.innerHTML = '<td>' + user.nama + '</td>';
        // row.innerHTML += '<td>' + user.umur + '</td>';
        // row.innerHTML += '<td>' + user.domisili + '</td>';

        row.innerHTML = '<td>' + user.nama + '</td>' +
                        '<td>' + user.umur + '</td>' +
                        '<td>' + user.domisili + '</td>'; 

        userList.appendChild(row);
    }
}

// mengambil semua data yang sudah di-input ke semua field di form
submitAction.addEventListener('submit', function() {
    const inputNama = document.getElementById('nama').value;
    const inputUmur = document.getElementById('umur').value;
    const inputDomisili = document.getElementById('domisili').value;
    const newUserData = {
        nama: inputNama,
        umur: inputUmur,
        domisili: inputDomisili,
    }
    putUserList(newUserData); // Lalu menyimpannya pada item storage melalui fungsi ini
    renderUserList(); // daftar user yang baru saja kita masukkan akan langsung ditampilkan melalui fungsi ini
});

// mengapus index pada data
// destroyButton.addEventListener('click', function(event) {
//     event.preventDefault();
//     localStorage.removeItem(storageKey);
//     alert('refresh');
// });

// menambahkan event listener ke objek window untuk event "load"
window.addEventListener('load', function() { // berisi perintah untuk menampilkan semua data yang sudah kita input ke dalam item storage
    if (checkForStorage()) {
        if (localStorage.getItem(storageKey) !== null) {
            renderUserList();
        }
    } else {
        this.alert('Browser yang Anda gunakan tidak mendukung Web Storage');
    }
});