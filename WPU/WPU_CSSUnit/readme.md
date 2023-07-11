=====================================================================================================================================================
======================================================= VALUE & UNIT ================================================================================
=====================================================================================================================================================

1. nilai dan satuan pada css
    - pada <width: 80%>. [80] merupakan nilai / value sedangkan [%] merupakan unit / satuan

2. css value
    2.1. integer
        - bilangan bulat ( positif / negatif ) tanpa satuan / unit ( hanya angka saja )
    2.2. number
        - bilangan pecahan
    2.3. percentage [%]
        - merepresentasikan sebagian dari nilai tertentu
        - % selalu relative terhadap nilai yang lain
    2.4. dimension
        - number yang memiliki satuan di belakangnya
        2.4.1. angle
            - memiliki satuan <deg> yaitu degree atau derajat
            - memiliki satuan <rad> yaitu radiant
            - memiliki satuan <grad> yaitu gradiant
            - memiliki satuan <turn> yaitu untuk menentukan berapa putaran yang kita inginkan
            - terdapat table conversion of common angles
        2.4.2. time
            - memiliki satuan <s> yaitu second
            - memiliki satuan <ms> yaitu millisecond
            - 3s = 3000ms
        2.4.3. resolution
            - untuk menentukan resolusi dari tampilan website
            - memiliki satuan <dpi> dot per inch yaitu berapa titik untuk setiap inci
            - memiliki satuan <dpcm> dot per centimeter yaitu berapa titik untuk setiap cm
            - memiliki satuan <dppx> dot per pixel yaitu berapa titik untuk setiap px
        2.4.4. length
            - absolute
                - px (pixel), 96px = 1in    - cm (centimeter), 1cm = 10mm
                - pt (point), 72pt = 1in    - mm (millimeter)
                - pc        , 1pc = 12pt    - in (inches)
            - relative
                - % : persentase ukuran relatif terhadap ukuran elemen parent
                - em : relatif terhadap ukuran font yang sedang digunakan
                - rem : relatif terhadap ukuran font "root" / <html>
                - ch : relatif terhadap lebar karakter '0' dari font yang sedang digunakan
                - vh : relatif terhadap tinggi dari viewport
                - vw : relatif terhadap lebar dari viewport
                - vmin : relative terhadap dimensi terkecil sebuah viewport
                - vmax : relative terhadap dimensi terbesar sebuah viewport
                + viewport adalah ukuran dari layar yang kita lihat saat itu

3. EM vs REM
    3.1. 2em = 2 kali ukuran element parent nya. jadi dia akan terus mencari element parent sampai ketemu element parent yang sudah ditentukan 
        ukurannya pada css. Jika sudah terus naik mencari element parent" nya dari pada parent tapi masih belum menemukan ukuran maka pada saat sudah
        sampai pada tag <html> maka tag html memiliki ukuran default yaitu [16px]. Maka ukuran 2em sama dengan 2x16px = 32px. Ketika em menumpuk pada
        parent"nya maka dia akan cascading / menumpuk. Bagaimana cara mengatasinya? maka kita gunakan REM
    3.2. rem lebih konsisten karena hanya berpatokan pada size tag <html> dan <:root>. disarankan untuk menggunakan pada font-size saja.

    3.3. rem disarankan juga digunakan pada tag bertipe [lenght] seperti padding, margin dan width. tdk seperti pada font yang langsung melihat elemen parentnya,
        pada lenght dia akan lebih dulu berpatokan / relatif terhadap element nya sendiri. Jika tidak terdapat nilai font-size baru mencari ke element parent nya.
        ini akan membuat kita bisa membuat element yg lain dengan ukuran beda yg relatif terhadap ukuran font nya.

4. VIEWPORT UNIT
    4.0. viewport itu area yang kita lihat menggunakan device apapun
    4.1. vh (viewport height) : relatif terhadap tinggi dari viewport
    4.2. vw (viewport width)  : relatif terhadap lebar dari viewport
    4.3. vmin                 : relatif terhadap dimensi terkecil dari viewport
        - pada desktop <vmin> nya itu [tinggi] dari desktop
        - pada handphone <vmin> nya itu [lebar] dari handphone
    4.4. vmax                 : relatif terhadap dimensi terbesar dari viewport
        - pada desktop <vmax> nya itu [lebar] dari desktop
        - pada handphone <vmax> nya itu [tinggi] dari handphone

5. CSS calc()
    5.1. fungsi pada css, yang memungkinkan kita untuk melakukan operasi matematika / kalkulasi pada nilai dari sebuah properti
    5.2. nilai yang bisa dikelola yaitu :
            - <length>      ,
            - <angle>       ,
            - <time>        ,
            - <percentage>  ,
            - <number>      ,
    5.3. pendeklarasian <property: calc(expression); >
            - penjumlahan <width: calc(10px + 100px); >
            - pengurangan <width: calc(100% - 30px);>
            - perkalian   <margin: calc(10px * 3);>
            - perkalian   <margin: calc(3 * 10px);>
            <!-- - perkalian   <margin: calc(3px * 10px)> ini yang salah-->
            - pembagian   <margin: calc(30px / 3);>
            - pembagian   <margin: calc(30px / 10px);>
            <!-- - pembagian   <margin: calc(30px / 0);> ini yang salah -->
            - pada pendeklarasian, wajib menggunakan spasi antar operator
    5.4. contoh biasa:
        .elemen {
            font-size: calc(3vw + 2px);
            width: calc(100% - 20px);
            height: calc(100vh - 20px);
            padding: calc(1vw + 5px);
        }
    5.5. contoh nested :
        .elemen {
            width: calc(calc(100% / 3) - calc(1rem * 2));
        }
        .elemen {
            width: calc((100% / 3) - (1rem * 2));
        }
    5.6. contoh order of operation :
        .elemen {
            width: calc(100% / 3 - 1rem * 2);
        }
    5.7. contoh css variables / custom properties :
        :root {
            --header-height: 32px;
        }
        .elemen  {
            height: calc(100vh - var(--header-height));
        }