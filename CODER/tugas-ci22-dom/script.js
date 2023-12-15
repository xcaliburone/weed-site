// saat tombol login (entrar) ditekan, kalau ada salah satu field yang kosong ( nama/password ) munculkun alert ke browser
// kalau nama harus diisi ( kalau nama ) atau password harus diisi ( kalau password ) bebas pesannya bagaimana asal beda nama dan password
// kalau sukses, munculkan alert login berhasil bebas + harus ada dimunculkan nama tau email dari user. misal : login berhasil, selamat datang adhim
// challanges: validasi passwordnya, pass harus minimal 8 karakter, mengandung huruf besar, huruf kecil, dan angka

const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function() {
    // Ambil nilai dari input field nama atau email dan password
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const trimUsername = username.trim()
    const trimEmail = email.trim()
    const trimPass = password.trim()
    
    // Periksa apakah salah satu dari field kosong
    if (trimUsername == "" && trimEmail == "" && trimPass == "") return alert("Semua data harus diisi sebelum login!");
    if (trimUsername == "") return alert("Nama Pengguna harus diisi sebelum login!");
    if (trimEmail == "") return alert("Email harus diisi sebelum login!");
    if (trimPass == "") return alert("Password harus diisi sebelum login!");
    return validasiPass(username);
});

function validasiPass(username) {
    const password = document.getElementById('password').value;
    if (password.length < 8) return alert('Password harus terdiri dari minimal 8 karakter.');
    if (!/[A-Z]/.test(password)) return alert('Password harus mengandung setidaknya satu huruf besar.');
    if (!/[a-z]/.test(password)) return alert('Password harus mengandung setidaknya satu huruf kecil.');
    if (!/\d/.test(password)) return alert('Password harus mengandung setidaknya satu angka.');
    return alert('Login berhasil. Selamat datang ' + username + '!');
}