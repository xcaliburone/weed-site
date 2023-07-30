// dari form yang kemarin, coba buat kek gini.
// 1. saat tombol login ditekan, kalau ada salah satu field yang kosong (nama / password) munculkan alert ke browser kalau nama harus diisi (kalau nama) atau password harus diisi (kalau password). bebasji bemana pesannya yang penting bedakan nama sama password
// 2. kalau sukses, munculkan alert kek login berhasil apalah bebas + harus ada dimunculkan nama (atau emailkah apalah itu yg diminta di input) dari usernya. Misal: Login berhasil, selamat datang Sultani!. 

// challenge:
// validasi passwordnya, passwordnya harus minimal 8 karakter, mengandung huruf besar, huruf kecil sama angka

document.getElementById("btn_submit").addEventListener('click', function () {
        const info = [];
        const nameValue = formuser.value;
        const emailValue = formemail.value;
        const passwordValue = formpassword.value;

        if(nameValue === "") {
            info.push("nama");
        }
        if(emailValue === "") {
            info.push("email");
        }
        if(passwordValue === "") {
            info.push("password");
        }

        const length = info.length;

        //jika panjang arr info 0, maka value setiap field tidak kosong
        if(length === 0) {
            const valid = isValid(passwordValue);
            //cek valid tidak passwordnya
            if (valid === "") {
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Akun anda telah disimpan\nSelamat datang ' + nameValue,
                heightAuto: false,
                showConfirmButton: false,
                didOpen: (modal) => {
                    modal.querySelector('.swal2-title').style.fontSize = '18px';
                  }
              })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong',
                    text: "Tolong perhatikan lagi password yang telah dibuat",
                    heightAuto: false,
                  });
            }
            
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                text: "Tolong untuk mengisi seluruh field yang ada",
                heightAuto: false,
            });
        }     
});

const isValid = (pass) => {
    let text = "Password harus terdapat";
    let koma = false;

    //kalau tidak ada huruf kecil
    if (!/[a-z]/.test(pass)) {
        text += " huruf kecil";
        koma = true;
    }

    //kalau tidak ada huruf besar
    if (!/[A-Z]/.test(pass)) {
        if (koma) {
            text += ",";
        } else {
            koma = true;
        }
        text += " huruf besar";
    }

    //kalau tidak ada digit (0-9)
    if (!/\d/.test(pass)) {
        if (koma) {
            text += ",";
        } else {
            koma = true;
        }
        text += " digit";
    }

    //jika panjang passwordnya lebih kecil dari 8
    if (pass.length < 8) {
        if (koma) {
            text += ",";
        } else {
            koma = true;
        }
        text += " minimal 8 karakter";
    }

    //kalau panjangnya tetapji text seperti yang ditetapkan, berarti valid
    if(text.length === 23) {
        text = "";
        return text;
    }
    return text;

}

//untuk cek kosong tidak suatu value field
const isEmpty = (form, element, elementString) => {
    const inputValue = form.value;

    //kalau kosong kasih info
    if (inputValue === "") {
        element.innerHTML = "Bagian " + elementString + " tidak bisa kosong";
    } else if (elementString === "password") { //kalau password, infonya ada tambahan
        const text = isValid(inputValue);
        if (text === "") { // kosong artinya valid
            element.innerHTML = "";
        } else {
            element.innerHTML = text;
        }
    } else { //inputnya tidak kosong
        element.innerHTML = "";
    }
};

