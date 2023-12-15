========================================================================================================================================================
----------------------------------------------------------------- /////// ------------------------------------------------------------------------------
========================================================================================================================================================

1. DEFINITION
    - tailwind adalah sebuah `utility first` framework yang didalamnya terdapat sangat banyak class-class yang bisa kita gunakan
    - adalah sebuah framework yang dapat membuat kita dengan cepat membangun website yang modern tanpa meninggalkan codingan html
    - jadi kita tidak perlu bikin atau membongkar codingan css
    - `class utility` adalah class yang berfungsi untuk melakukan satu hal saja
    - boorstrap merupakan UI framework, sedangkan tailwind merupakan utility-first frmaework

2. UTILITIES
    - Preflight     ,merupakan css reset yang mereset property" default yang ada didalam elemen" HTML
    - Layouting
    - Flexbox & Grid
    - Spacing & Sizing
    - Typography
    - Background & Borders
    - Effect & Filters
    - Transition, Transformation & Animation
    - Tables
    - ......

3. FEATURES
    - Interactivity         ,kita bisa memberi interaksi pada element menggunakan utility class nya
        + pseudo-classes : hover, focus, active, first, last, ...
        + pseudo-element : before, after, placeholder, file, selection, ...
    - Responsive Design     ,kita bisa merancang resp untuk halaman kita menggunakan utility class nya
    - Dark Mode             ,dapat dengan mudah menambahkan darkmode untuk aplikasi kita
    - Reusability           ,pada saat element" HTML dijadikan component yang akan dipakai berulang kali, fitur ini akan sgt membantu
    - Custom Styles         ,dapat dengan mudah membuat custom css sendiri
    - Functions & Directives

4. INSTALASI DAN KONFIGURASI
    - siapkan extensions `tailwind css intellisense` dan siapkan package manager `NPM (Node.js)`
    - saat ini kita akan menggunakan CDN ( content delivery network )
    - ini adalah cara paling gampang tapi `bukan cara yang terbaik`
    - simpan `<script src="https://cdn.tailwindcss.com"></script>` kedalam tag <head>
    - setelah menambahkan maka semua style akan direset menggunakan reset milik tailwind
    - *problem*nya adalah kita tidak bisa mendapatkan fitur tailwind secara lengkap
    - kemudian ketika kita connect menggunakan link <script> itu ukuran filenya cukup besar sekitaran 400-500 kb
    - kita juga bisa melakukan `costumizing` config

    - cara kedua yaitu bisa menggunakan `tailwind CLI` yaitu command line interface
    - menginstall tailwind menggunakan *npm* , buka terminal
    - inisialisasikan `npm` terlebih dahulu `npm init -y` ( -y untuk membuat requirement terisi secara otomatis )
    - lalu ketikkan `npm install -D tailwindcss`
    - kemudian jalankan inisialisasi tailwind nya `npx tailwindcss init`
    <!-- npm uninstall tailwindcss -->
    - jika muncul error karena tidak ada `postcss` dan `auto prefixer` maka keti di terminal `npm i -D postcss autoprefixer`

    - selanjutnya kita perlu konfigurasi path / lokasi dari file template kita ( html / js yang didalamnya akan digunakan class" tailwind )
    - pada [tailwind.config.js] pada `content` tambahkan dir file nya `./index.html`
    
    - selanjutnya menambahkan `tailwind directives`
    - buat file `input.css` didalamnya tambahkan `@tailwind base; @tailwind components; @tailwind utilities`
    - ini merupakan directives / fungsi yg dimiliki tailwindcss yg ditulis berdasarkan postcss ( ini bukan css biasa )
    - jadi tailwind itu sebelum dijalankan dia akan terlebih dahulu melewati file css ini, begitu lewat dia akan menjalankan tiga
        `directives` atau `three layers of tailwind`
    - untuk `@tailwind base` adalah tailwind akan mereset semua style dari browser
    - untuk `@tailwind components` adalah tailwind akan meminta component didalam library nya
    - untuk `@tailwind utilities` adalah tailwind class-class utility yg nantinya akan digunakan
    - jika nanti kita punya `component sendiri` atau `konfigurasi lain`, bisa disimpan disini

    - selanjutnya menjalankan proses build nya
    - bikin file css akhir yang akan digunakan oleh web
    - ketik `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`
    - abaikan *warn* itu karena kita belum menuliskan utility tailwind didalam web
    - sekarang ada file baru bernama `output.css` berisi css hasil dari tailwind yg nge compile isi dari `input.css` menjadi `output.css`
    - pada [index.html] tambahkan link yang mengarah ke `output.css`

    - buat folder [src], buat folder [css] didalamnya
    - masukkan `input.css` kedalam [css]
    - buat folder [public]
    - masukkan `index.html` kedalam [public]
    *delete file output.css*

    - pada [tailwindcss.config.js] pada `content` tambahkan `./public/**/*.{html,js}`
    - bacanya, folder root masuk ke `public` lalu `apapun folder didalamnya` lalu `apapun file didalamnya` selama ekstensionnya `html & js`
    - ketik `npx tailwindcss -i ./src/css/input.css -o ./public/css/style.css --watch`

    - untuk memudahkan building
    - buka [package.json] bagian `scripts` tambahkan `keyword` `dev` lalu `npx tailwindcss -i ./src/css/input.css -o ./public/css/style.css --watch`
    - untuk memudahkan pengetikan

    *lakukan ini ketika website benar benar sdh selesai*
    - ketikkan `npx tailwindcss -o ./public/css/final.css --minify` untuk lebih menghemat penyimpanan

    - selesai melakukan penginstalan menggunakan metode CLI