// import { useState } from "react";
// import ListBox from "./ListBox";
// import SelectedBox from "./SelectedBox";

export default function Main({ children }) {

    return (
        <main className="main">
            {/* <ListBox setlists={setlists} onSelectedSetlist={handleSelectedSetlist} /> */}
            {/* <SelectedBox selectedSetlist={selectedSetlist} /> */}
            { children }
        </main>
    )
}