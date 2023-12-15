// import { useState } from "react";
// import SetlistList from './SetlistList'

// export default function ListBox({ setlists, onSelectedSetlist }) {

//     const [isOpen1, setIsOpen1] = useState(true); // untuk memeriksa apakah kotak ini lagi dibuka atau tidak

//     return(

//         <div className="box">
//             <button className="btn-toggle" onClick={() => setIsOpen1((open) => !open)}>
//                 {isOpen1 ? '–' : '+'}
//             </button>
//             { isOpen1 && <SetlistList setlists={setlists} onSelectedSetlist={onSelectedSetlist} /> }
//         </div>

//     )

// }

// function SetlistList({ setlists, onSelectedSetlist }) {
//     return(
//         <ul className="list list-setlist">
//             {setlists?.map((setlist) => (
//                 <Setlist key={setlist.mal_id} setlist={setlist} onSelectedSetlist={onSelectedSetlist} />
//             ))}
//         </ul>
//     )
// }

// function Setlist({ setlist, onSelectedSetlist }) {
//     return(
//         <li onClick={() => onSelectedSetlist(setlist.mal_id)}>
//             <img src={setlist.image} alt={`${setlist.title} cover`} />
//             <h3>{setlist.title}</h3>
//             <div>
//                 <p><span>{setlist.year}</span></p>
//             </div>
//         </li>
//     )
// }