// import { useState } from "react";
// import SetlistDetail from "./SetlistDetail";

// export default function SelectedBox({ selectedSetlist }) {
//     const [isOpen2, setIsOpen2] = useState(true); // untuk memeriksa apakah kotak ini lagi dibuka atau tidak

//     return(

//         <div className="box">
//             <button className="btn-toggle" onClick={() => setIsOpen2((open) => !open)}>
//                 {isOpen2 ? '–' : '+'}
//             </button>
//             { isOpen2 && <SetlistDetail selectedSetlist={selectedSetlist} /> }
//         </div>

//     )

// }