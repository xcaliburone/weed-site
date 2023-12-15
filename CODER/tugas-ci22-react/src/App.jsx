// import { useState } from 'react'
import './App.css'
import ContactCard from './components/ContactCard'
import Form from './components/Form'

// bikin contact list

// buat komponen untuk ContactCard yang akan dipanggil berdasarkan props
// buat state untuk daftar kontaknya. misal contactList
// contactList di map untuk buat contactCard. sehingga kontak bisa ditambah"
// kontak bisa dihapus

export default function App() {
  

    return(
        <>
            <div className="container">
                <Form />
                <ContactCard />
            </div>
        </>
    )
}

