import Setlist from "./Setlist"

export default function SetlistList({ setlists, onSelectedSetlist }) {
    return(
        <ul className="list list-setlist">
            {setlists?.map((setlist) => (
                <Setlist key={setlist.mal_id} setlist={setlist} onSelectedSetlist={onSelectedSetlist} />
            ))}
        </ul>
    )
}