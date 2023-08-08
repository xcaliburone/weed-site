========================================================================================================================================================
----------------------------------------------------------------- /////// ------------------------------------------------------------------------------
========================================================================================================================================================

1. Flex Box ( Flexible Box Module )
    1.1. Flexible Box Module adalah sebuah model layout **1 dimensi** yang dapat mengatur jarak dan penjajaran ( alignment ) antar item dalam
        sebuah container.

    1.2. Kenapa 1 dimensi? karena hanya dapat mengatur 1 dimensi pada saat tertentu, antara baris atau kolom, tidak bisa keduanya sekaligus.
        Bagaimana dengan 2 dimensi? untuk 2 dimensi ada pada materi CSS GRID.

    1.3. Flex Box Layout Module adalah sebuah modul yang menawarkan cara yang efektif untuk menyusun, menyejajarkan, dan mendistribusikan
        jarak antar item di dalam sebuah container, meskipun ukurannya dinamis, atau bahkan tidak diketahui ukurannya.

2. Istilah Pada Flex Box
    2.1. Container / wadah / pembungkus / parents
    2.2. items / element di dalam pembungkus / childs
    2.3. main axis : ketika kita set elemen-elemen sejajar secara horizontal. Adalah sumbu utama dari sebuah container yang menentukan urutan dari
        penempatan items secara horizontal
    2.4. cross axis
    2.5. main size : ukuran dari container yang akan membuat dimensi dari items nya relatif terhadap main size
    2.6. cross size : ukuran dari kolom
    2.7. main start & main end : untuk menentukan awal dari elemen secara horizontal
    2.8. cross start & cross end : untuk menentukan awal dari elemen secara vertikal

3. Property pada Container
    3.1. display : flex     , membuat sebuah elemen parent menjadi flexbox, dan membuat elemen" di dalamnya bisa berperilaku flex juga
    3.2. flex-direction     , untuk mengatur arah dari urutan elemen" di dalamnya.
    3.3. flex-wrap          , untuk mengatur ketika elemen yang kita punya sudah tidak muat ke container dalam baris nya.
                              Secara default semua items di dalam container akan berada pada suatu baris meskipun ukurannya sudah tidak cukup,
                              wrap memungkinkan untuk memindahan items ke baris di bawahnya.
    3.4. justify-content    , untuk mengatur rata dari elemen-elemen di dalamnya.
    3.5. align-items        , untuk mengatur kesejajaran antar items tapi secara vertikal ( cross axis ).
    3.6. align-content      , hanya berlaku ketika content / items nya lebih dari satu baris.

4. Property pada Items
    4.1. order              , untuk mengatur urutan dari elemen-elemennya.
    4.2. flex-grow / flex   , untuk mengatur ukuran dari item dan akan memenuhi container.
    4.3. align-self         , untuk mengatur hanya satu elemen pada baris tersebut, jadi tidak semua berubah