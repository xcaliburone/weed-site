========================================================================================================================================================
----------------------------------------------------------------- PENDAHULUAN --------------------------------------------------------------------------
========================================================================================================================================================

1. DOM ( Document Object Model ) adalah antarmuka pemrograman untuk HTML yang merepresentasikan halaman web, sehingga program dapat mengubah
    dan memanipulasi strukturnya.
    - document merupakan isi keseluruhan struktur website.
    - object adalah sebuah nilai / tipedata pada JS, object memiliki `properti` dan `method`.
2. DOM adalah representasi elemen HTML yang ada didalam dokumen untuk nantinya dijadikan sebagai objek.
3. DOM adalah pemrograman berbasis objek yang merepresentasikan dokumen web.
4. DOM membuat seluruh komponen dari halaman web dapat diakses dan dimanipulasi.
5. komponen yang dimaksud, seperti :
    - elemen HTML       - text
    - atribut           - dll
6. DOM dapat dimanipulasi ( dibuat, diubah, dihapus ) menggunakan JavaScript.
7. Apa yang akan dipelajari?
    - DOM Selection     - DOM Traversal
    - DOM Manipulation  - Event Handling

========================================================================================================================================================
----------------------------------------------------------------- DOM TREE -----------------------------------------------------------------------------
========================================================================================================================================================

1. NodeList vs HTMLCollection
    - jika kalian memilih cuman satu node pada DOM TREE maka itu hanya sebuah node.
    - jika memilih lebih dari satu node disebut dengan NodeList tanpa memedulikan tipe node nya.
    - sedangkan HTMLCollection adalah kumpulan node yang memiliki tipe element HTML saja.
    - perbedaan ini yang akan menentukan cara mengelolanya.

2. NodeList vs HTMLCollection
    - keduanya merupakan kumpulan node
    - struktur datanya mirip array
    - nodeList dapat berisi node apapun, sedangkan HTMLCollection harus berisi elemen HTML.
    - HTMLCollection bersifat `live` sedangkan nodeList `tidak`.

3. Struktur Hierarki DOM Tree
    - Root Node 
            + node yang menjadi sumber dari semua node lain di dalam DOM.
            + document.
    - Parent Node
            + node yang berada satu tingkat diatas node yang lain.
    - Child Node
            + node yang berada satu tingkat dibawah node yang lain.

========================================================================================================================================================
-------------------------------------------------------------------- DOM SELECTION ---------------------------------------------------------------------
========================================================================================================================================================

1. Memilih elemen-elemen pada DOM menggunakan JS, merupakan tahap awal ketika ingin melakukan manipulasi / penelusuran pada DOM
2. DOM Selection Method
    - getElementById()              , yaitu kita memilih elemen dalam DOM berdasarkan id-nya. Menghasilkan `element`
    - getElementsByTagName()        , JS tolong carikan sy elemen" yang memiliki nama tag tertentu. Menghasilkan`HTMLCollection`
    - getElementsByClassName()      , carikan elemen yang memiliki nama kelas tertentu. Menghasilkan `HTMLCollection`
    - querySelector()               , Menghasilkan `element`
    - querySelectorAll()            , Menghasilkan `nodeList`
3. Mengubah `node root`
    - awalnya
        const pee4 = document.querySelectorAll('p');
        pee4[3].style.backgroundColor = 'yellow'
    - menjadi
        const sectionB = document.getElementById('b');
        const pee4 = sectionB.querySelector('p');
        pee4.style.backgroundColor = 'yellow'

========================================================================================================================================================
-------------------------------------------------------------------- DOM MANIPULATION ------------------------------------------------------------------
========================================================================================================================================================

1. DOM Manipulation Method
    - Manipulasi Element
        + element.innerHTML             : untuk mengubah isi dari sebuah tag yang sudah diseleksi
        + element.style.<property css> 
        + element.setAttribute()
                > element.getAttribute()
                > element.setAttribute()
                > element.removeAttribute()
        + element.classList
                > element.classList.add()
                > element.classList.remove()
                > element.classList.toggle()    : if element tidak punya element tersebut, tambahkan. else hilangkan class tersebut
                > element.classList.item()      : utk mengetahui class tertentu didalam sebuah element
                > element.classList.contains()  : mengecek apakah dalam sebuah element memiliki class tertentu
                > element.classList.replace()   : mengganti class yang ada sebelumnya dengan class yang baru
        + dll
    - Manipulasi Node
        + memungkinkan kita menambahkan node baru. Misal elemen baru pd DOM, bisa juga menghapus elemen yang ada pd DOM, dan mengganti sebuah
            elemen menggunakan elemen yang baru.
        + Manipulasi Method
                > document.createElement()
                > document.createTectNode()
                > node.appendChild()
                > node.insertBefore()
                > parentNode.removeChild()
                > parentNode.replaceChild()
                > ....
        + Method Baru
                > parentNode.append()       : menambahkan element diakhir dari sebuah parent
                > parentNode.prepend()      : menambahkan element diawal dari sebuah parent
                > childNode.before()
                > childNode.after()
                > childNode.remove()
                > childNode.replaceWith()
                > ....

========================================================================================================================================================
-------------------------------------------------------------------- DOM EVENTS ------------------------------------------------------------------------
========================================================================================================================================================

1. Events pada JS merepresentasikan sebuah kejadian yang terjadi di dalam DOM.
2. Kejadian tersebut bisa dilakukan oleh user ( mouse event, keyboard event, dll ).
3. Ataupun dilakukan secara otomatis oleh `API`. misal, ketika animasi selesai dijalankan, ketika halaman selesai di load.
4. Cara `mendengarkan` event
    - Event Handler
        + inline HTML attribute (tdk disarankan karena mencampur html dan JS dan kita jadi modif html nya)
        + element method
    - addEventListener()
5. memanggil Event Handler dengan on<event>
6. Event Handler vs addEventListener()
    - menggunakan Event Handler itu merupakan cara lama.
    - ketika kita memberikan lebih dari satu perubahan pada sebuah event. Jika kita menggunakan `Event Handler` maka perubahan yang terakhir
        dilakukan akan menimpa perubahan sebelumnya.
    - Sedangkan menggunakan `addEventListener` dia akan menambah perubahannya.
7. Events List
    - Mouse Event           : ketika mouse diklik, double klik, pointer digerakkan
                > click         > mouseenter
                > dblclick       > mouseup
                > mouseover     > wheel         > ......
    - Keyboard Event        : ketika keyboard ditekan, dilepas, dll
                > keydown       > keyup
                > keypress
    - Resources Event       : ketika halaman diload, kita bisa mengetahui apakah koneksi internetnya lambat
    - Focus Event           : ketika sebuah text field / inputan di klik
    - View Event
                > resize
                > scroll
    - Form Event
                > reset
                > submit
    - CSS Animation & Transition Event
    - Drag & Drop Event
    - dll

========================================================================================================================================================
-------------------------------------------------------------------- DOM TRAVERSAL ---------------------------------------------------------------------
========================================================================================================================================================

1. DOM Traversal ( penelusuran dom )
2. Kenapa sebuah elemen harus ditelusuri? kenapa tidak diseleksi saja?
    - lihat DOM4
3. DOM Traversal Method
    - parentNode        : mengembalikan hasil berupa node
    - parentElement     :                            element
    - nextSibling       : harus saudara kandung dari element yang kita pilih, mengembalikan node
    - nextElementSibling:                            element
    - previousSibling   :                            node
    - previousElementSibling    :                    element

========================================================================================================================================================
-------------------------------------------------------------------- DOM PREVENT DEFAULT ---------------------------------------------------------------
========================================================================================================================================================

1. Yaitu cara kita untuk menghentikan aksi default yang dilakukan oleh elemen web kita.
2. misal terdapat elemen <a></a> dgn class `close` yang dirancang sebagai tombol X close tapi elemen tidak dapat dihapus karena terdapat
    aksi default dari tag <a> yang dimana a merupakan hyperlink. dan halamannya malah akan di refresh
    <close.forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.target.parentElement.style.display = 'none';
        });
    });
    >
3. maka,
    <close.forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.target.parentElement.style.display = 'none';
            e.preventDefault()    //panggil-object-eventnya-lalu-kemudian-tambahkan-sebuah-method
        });
    });
    >

========================================================================================================================================================
-------------------------------------------------------------------- DOM Event Bubbling ----------------------------------------------------------------
========================================================================================================================================================

1. Secara default ketika kita memberikan event pada sebuah element, maka event tersebut akan berlaku untuk elemen-elemen pembungkusnya juga.
2. Jadi seperti `gelembung air` yang semakin keatas, makin keatas terus.