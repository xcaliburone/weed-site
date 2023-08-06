========================================================================================================================================================
------------------------------------------------------------------ INTRO -------------------------------------------------------------------------------
========================================================================================================================================================

A. CSS3 dibagi menjadi beberapa modul, dan tiap-tiap modulnya menambahkan kemampuan / fitur pada CSS2
B. kenapa CSS3
        a. membuat website lebih fleksibel
        b. membuat mockup dengan cepat tanpa bantuan bahasa scripting
        c. mengurangi penggunaan gambar = kecepatan load halaman
        d. penggunaan selector untuk menghindari penggunaan markup yang boros
C. property CSS3 yang akan dibahas
        a. border-radius                j. selector lanjut
        b. opacity                      k. webfont
        c. RGBa dan HSLa                l. media queries
        d. box-sizing                   m. transform ( 2D & 3D )
        e. box-shadow                   n. css transition
        f. text-shadow                  o. css animation
        g. css gradient                 p. css filter
        h. background                   q. flexbox
        i. pseudo-element               r. css columns
D. vendor-prefixes
        a. webkit
        b. moz
        c. ie
        d. o

========================================================================================================================================================
-------------------------------------------------------------- BORDER RADIUS ---------------------------------------------------------------------------
========================================================================================================================================================

A. property dari CSS3 yang berfungsi untuk membuat ujung dari kotak menjadi tumpul
B. property :
        a. border-radius
        b. border-top-left-radius
        c. border-top-right-radius
        d. border-bottom-left-radius
        e. border-bottom-right-radius
        f. border-radius: (atas-kiri) (atas-kanan) (bawah-kanan) (bawah-kiri)

========================================================================================================================================================
----------------------------------------------------------------- OPACITY ------------------------------------------------------------------------------
========================================================================================================================================================

A. property dari CSS3 yang berfungsi untuk membuat object transparant. Tingkat transparansi tergantung pada kebutuhan
B. opacity : [value];
C. value pada opacity berkisar pada 0 sampai 1
D. pada CSS3 penulisan 0.5 sama saja dengan menuliskan .5 saja 
E. element parent yang bersifat transparansi dapat mewariskannya kepada element child
F. kita tidak bisa membuat element child itu solid ketika parent nya transparan

========================================================================================================================================================
----------------------------------------------------------------- RGBa & HSLa --------------------------------------------------------------------------
========================================================================================================================================================

A. kendala diatas bahwa ketika parents transparan maka child tidak bisa solid
B. maka kita gunakan properti rgba()
        - rgba() : red green blue alpha
        - hsla() : hue saturation lightness alpha
C. jadi kita bisa memberikan warna beserta transparansinya
D. jadi jika element parent transparan, child tidak ikut karena yang ditransparankan adalah warnanya

========================================================================================================================================================
----------------------------------------------------------------- BOX SHADOW ---------------------------------------------------------------------------
========================================================================================================================================================

A. wajib    : box-shadow : <x-offset> <y-offset> <blur> <color>
B. optional : box-shadow : <inset> <x-offset> <y-offset> <blur> <spread> <color>
C. spread itu menambah luas dari bayangan
D. inset membuat bayangan berada didalam kotak
E. multiple shadow, kita dpt membuat banyak bayangan menggunakan tanda koma (,)

========================================================================================================================================================
----------------------------------------------------------------- TEXT SHADOW --------------------------------------------------------------------------
========================================================================================================================================================

A. text-shadow : <x-offset> <y-offset> <blur> <color>
B. juga bisa multiple shadow

========================================================================================================================================================
----------------------------------------------------------------- LINEAR GRADIENT ----------------------------------------------------------------------
========================================================================================================================================================

A. linear-gradient memberikan gradasi warna secara garis urus
B. bukan property dari CSS3, melainkan value untuk background-image
C. background-image : linear-gradient(<warna awal>, <warna akhir>);
D. background : linear-gradient(<warna awal>, <warna akhir>, <warna-n>);
E. untuk mengatur arah dari gradient
   background : linear-gradient(<sudut> / <arah>, <warna awal>, <warna akhir>);
F. <arah> memiliki value : to bottom            : to left top
                         : to top               : to left bottom
                         : to left              : to right top
                         : to right             : to right bottom
G. karena sebelumnya proporsi warna nya seimbang. dengan color stop maka kita dapat menentukan bobot pada warna

========================================================================================================================================================
----------------------------------------------------------------- RADIAL GRADIENT ----------------------------------------------------------------------
========================================================================================================================================================

A. radial-gradient memberikan gradasi warna secara melingkar
B. background-image : radial-gradient(<warna awal>, <warna akhir>), <warna-n>;
C sintaks lengkapnya yaitu,
  radial-gradient(<tipe> <jangkauan> at <posisi-y> <posisi-x>, <warna-1..n>);
D. <tipe> memiliki value ellipse (basic) dan circle
E. <jangkauan> yaitu jarak dari pusat gradient ke sisi terluar-nya. berikut value-nya
        - closest-corner : jarak dari pusat gradient ke sudut terdekat elemen
        - closest-side : jarak dari pusat gradient ke sisi terdekat elemen
        - farthest-corner : jarak dari pusat gradient ke sudut terjauh elemen
        - farthest-side : jarak dari pusat gradient ke sisi terjauh elemen
F. <posisi> yaitu untuk memindahkan pusat gradient. dengan value
        - posisi-y : top, center, bottom, px
        - posisi-x : left, center, right, px

========================================================================================================================================================
----------------------------------------------------------------- FONT FACE ----------------------------------------------------------------------------
========================================================================================================================================================

A. @font-face untuk mengelola font pada css
B. @font-face {
        font-family: 'namaFormatBaru';
        src: url('lokasi/file');
        src: url('lokasi/file') format (''),.. ;
}

========================================================================================================================================================
----------------------------------------------------------------- WEB FONT GENERATOR -------------------------------------------------------------------
========================================================================================================================================================

A. sebaiknya menggunakan format WOFF ( Web Open File Format ) karena lebih cepat di load oleh website
B.. jika menemukan format TTF atau EOT maka kita perlu merubah ke WOFF menggunakan web generator 

========================================================================================================================================================
----------------------------------------------------------------- VENDOR PREFIX ------------------------------------------------------------------------
========================================================================================================================================================

A. agar syntax css yang kita buat itu kompatible di semua browser. karena tidak semua support css3
B. sintaks khusus yang harus ditambahkan untuk beberapa property css
C. sintaks spesifik untuk tiap browser / vendor
D. -webkit- <properti-css3>     ( chrome, safari, opera )
   -moz- <properti-css3>        ( firefox )
   -ms- <properti-css3>         ( internet explorer )
   -o- <poperti-css3>           ( opera versi lama )
E. shouldiprefix.com / caniuse.com / pleeease.io/play/

========================================================================================================================================================
----------------------------------------------------------------- FILTER -------------------------------------------------------------------------------
========================================================================================================================================================

A. property yang digunakan untuk memberikan efek visual pada gambar, background, atau border
B. filter: <tipe-filter>;
C. valuenya yaitu : - blur (px)                 - sepia (angka / %)
                    - brightness (angka / %)    - hue-rotate (deg)
                    - contrast (angka / %)      - invert (angka / %)
                    - saturate (angka / %)      - opacity (angka / %)
                    - grayscale (angka / %)     - drop-shadow (sama seperti box-shadow)

========================================================================================================================================================
----------------------------------------------------------------- TRANSFORM ----------------------------------------------------------------------------
========================================================================================================================================================

A. dapat melakukan transformasi 2D dan 3D, kita hanya bahas 2D saja
B. transform: <fungsi>;
C. <fungsi> bernilai : scale     ,untuk memperbesar atau memperkecil elemen
                     : rotate    ,memutar
                     : skew      ,membuat condong / miring
                     : translate ,mengubah posisi
D. scale(angka)  / scaleX(angka)  / scaleY(angka)
E. rotate(deg)   / rotateX(deg)   / rotateY(deg)
F. skew(deg)     / skewX(deg)     / skewY(deg)
G. translate(px) / translateX(px) / translateY(px)

========================================================================================================================================================
----------------------------------------------------------------- TRANSITION ---------------------------------------------------------------------------
========================================================================================================================================================

A. memungkinkan kita mengubah nilai dari poperti html secara halus
B. transition hanya memiliki keadaan awal dan keadaan akhir
C. transition: [property] <durasi> [fungsi] [delay]; keterangan [opsional]<wajib>
D. <durasi> berisi angka dengan satuan s atau ms
E. [property] menentukan properti apa saja yg terkena dampak transisi
F. animatable properties 
        : background-color              : top left bottom right
        : background-position           : margin padding
        : background-size               : width height
        : border                        : opacity
        : color                         : transform
        : filter                        : word-spacing
        : font-size                     : letter-spacing
        : line-height                   : ....
G. non-animatable properties
        : font-family                   : position
        : display                       : ....
H. [fungsi] / timing function. value nya yaitu
        - ease                          - ease-in-out
        - ease-in  (awalnya pelan)      - linear
        - ease-out                      - cubic-bezier(w,x,y,z)
G. cubic-bezier, angka nya ditentukan pada inspect element di google chrome
H. [delay] untuk memberikan delay / tunggu sebelum melakukan transisi bernilai s atau ms


========================================================================================================================================================
----------------------------------------------------------------- ANIMATION ----------------------------------------------------------------------------
========================================================================================================================================================

A. animation memiliki keadaan awal, keadaan antara, keadaan akhir. alias memiliki banyak keyframe
B. @keyframes [name] {
        from {
                [property-css]
        }
        to {
                [property-css]
        }
   }
C. animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode] [play-state]
D. [iteration-count] memiliki nilai <angka> atau infinite
E. [direction] memiliki nilai normal, reverse, alternate, dan alternate-reverse
F. [fill-mode] untuk menentukan akhir dari transisi. memiliki nilai none, forwards, backwards, both
G. [play-state] memiliki nilai running dan paused