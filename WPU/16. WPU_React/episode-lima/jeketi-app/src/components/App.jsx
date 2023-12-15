import { useState } from 'react';
import './App2.css';
import NavBar from './NavBar';
import Main from './Main';
import Search from './Search'; import NumResult from './NumResult';
import Box from './Box';
import SetlistList from './SetlistList'; import SetlistDetail from './SetlistDetail';

export default function App() {

    const setlistData = [
        {
            mal_id: 1,
            title: 'Pajama Drive',
            year: '8 September 2012',
            // image: 'https://i.scdn.co/image/ab67616d0000b273c716f0361f9ed5a8f4b78d80',
            image: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2022/11/15/54f32781-ff9b-466f-86a1-57fa59a5e52d-1668515312882-2187fe27ecc2b996c9a292bee0ae1bf5.jpeg',
            score: 8.71,
            synopsis:
                'Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.',
        },
        {
            mal_id: 2,
            title: 'Renai Kinshi Jourei',
            year: '26 Desember 2012',
            // image: 'https://i.scdn.co/image/ab67616d0000b2732e42259343ab93d7286967af',
            image: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2021/04/05/c7976999-b028-405f-948b-9777afc8a629-1617593375345-ca8626d0ba97c53fe6777313e9bab23f.jpg',
            score: 8.71,
            synopsis:
                "Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.",
        },
        {
            mal_id: 3,
            title: 'Ramune No Nomikata',
            year: '15 Januari 2023',
            image: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2023/01/17/ba950f91-9aa1-4513-9a8a-22c3fe55da7b-1673931047139-c8e899568d204131cdc86be9ff095164.png',
            score: 8.71,
            synopsis:
                "Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.",
        },
        {
            mal_id: 4,
            title: 'Seifuku No Me',
            year: '1 September 2019',
            image: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2021/05/24/86d5891a-d516-4a36-b6b3-019946cc70fa-1621847706115-476ca696be2adfcfde3a5d866992fe36.jpg',
            score: 8.71,
            synopsis:
                'Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.',
        },
        {
            mal_id: 5,
            title: 'Aitakatta',
            year: 2023,
            // image: 'https://pbs.twimg.com/media/FvBju92aIAATK1L?format=jpg&name=large',
            image: 'https://pbs.twimg.com/media/Fu94jRQXwAAsIj9?format=jpg&name=small',
            score: 100,
            synopsis:
                "Manis dan pahitnya sebuah pertemuan akan dapat kalian rasakan melalui pertunjukan “Ingin Bertemu” yang dipersembahkan oleh JKT48 Trainee Generasi 11.",
        },
        {
            mal_id: 6,
            title: 'Banzai',
            year: 2023,
            image: 'https://jkt48.com/assets/banzaipb/image/og-thumbnail.jpg?v=2',
            score: 100,
            synopsis:
                "Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.",
        },
        {
            mal_id: 7,
            title: 'Seishun Girls',
            year: '20 April 2018',
            // image: 'https://i.scdn.co/image/ab67616d0000b2736e3f55ac3d40cfb4f5115c10',
            image: 'https://pbs.twimg.com/media/E--44X5VUAE5saQ?format=jpg&name=900x900',
            score: 100,
            synopsis:
                "Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.",
        },
        {
            mal_id: 8,
            title: 'Saka Agari',
            year: 2023,
            // image: 'https://i.scdn.co/image/ab67616d0000b27309ad599a5cb91b00e66cfb45',
            image: 'https://i.scdn.co/image/ab67616d0000b27309ad599a5cb91b00e66cfb45',
            score: 100,
            synopsis:
                "Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.",
        },
        {
            mal_id: 9,
            title: 'Fajar Sang Idola',
            year: 2023,
            image: 'https://i.scdn.co/image/ab67616d0000b273d41506c06eb99bc19d72056f',
            score: 100,
            synopsis:
                "Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.",
        },
        {
            mal_id: 10,
            title: 'Dewi Theater',
            year: 2023,
            image: 'https://i.scdn.co/image/ab67616d0000b2734c158b911c0caeaeb78f675b',
            score: 100,
            synopsis:
                "Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.",
        },
        {
            mal_id: 11,
            title: 'Tadaima Renaichuu',
            year: 2023,
            image: 'https://i.scdn.co/image/ab67616d0000b273ffb1232bb140b2fa85303294',
            score: 100,
            synopsis:
                "Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.",
        },
        {
            mal_id: 12,
            title: 'Bel Terakhir Berbunyi',
            year: 2023,
            image: 'https://i.scdn.co/image/ab67616d0000b2732cc22269830d2f764a5e3d1c',
            score: 100,
            synopsis:
                "Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.",
        },
        {
            mal_id: 13,
            title: 'Boku No Taiyou',
            year: 2023,
            image: 'https://i.scdn.co/image/ab67616d0000b273f5c2b790c021291c64d1ba6c',
            score: 100,
            synopsis:
                "Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.",
        },
        {
            mal_id: 14,
            title: 'Dareka No Tame Ni',
            year: 2023,
            image: 'https://i.scdn.co/image/ab67616d0000b27333c527ff24558371d4c67ee6',
            score: 100,
            synopsis:
                "Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.",
        },
        {
            mal_id: 15,
            title: 'Ramadhan',
            year: 2023,
            image: 'https://i.scdn.co/image/ab67616d0000b27333c527ff24558371d4c67ee6',
            score: 100,
            synopsis:
                "Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.",
        },
        {
            mal_id: 16,
            title: 'Sambil Menggandeng Erat Tanganku',
            year: 2023,
            image: 'https://i.scdn.co/image/ab67616d0000b273b5e43e81be042d4121611c4c',
            score: 100,
            synopsis:
                "Setlist legendaris telah kembali! Ini adalah pertunjukan yang menjadi langkah awal JKT48 saat pertama kali berdiri. Seperti apakah new era JKT48 membawakannya? Bersiaplah menyaksikan 16 lagu yang akan menggetarkan hatimu dengan beragam bentuk dari cinta.",
        },
    ];

    const [setlists, setSetlists] = useState(setlistData); // utk mengelolah data anime, akan diganti dengan public API
    const [selectedSetlist, setSelectedSetlist] = useState(setlists[0]); // utk mengelolah data yang tampil disebelah kanan

    function handleSelectedSetlist(id) {
        const newSetlist = setlists.filter((setlist) => setlist.mal_id === id);
        setSelectedSetlist(newSetlist[0]);
    } // utk memilih mana yang akan tampil disebelah kanan

    return (
        <> 
            {/* <NavBar setlists={setlists} /> */}
            <NavBar  >
                <Search>
                    <NumResult setlists={setlists} />
                </Search>
            </NavBar>
            
            {/* <Main setlists={setlists} /> */}
            <Main>
                <Box>
                    <SetlistList setlists={setlists} onSelectedSetlist={handleSelectedSetlist} />
                </Box>

                <Box>
                    <SetlistDetail selectedSetlist={selectedSetlist} />
                </Box>
            </Main>  
        </>
    );
}