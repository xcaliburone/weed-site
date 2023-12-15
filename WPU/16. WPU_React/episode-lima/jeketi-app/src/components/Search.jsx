import { useState } from "react";

export default function Search({ children }) {
    const [query, setQuery] = useState(''); // untuk mengelolah query search

    return (
        <div className="search-container">
            <input className="search" type="text" placeholder="Search Setlist..." value={query} onChange={(e) => setQuery(e.target.value)} />
            {/* <NumResult setlists={setlists} /> */}
            { children }
        </div>
    )
}