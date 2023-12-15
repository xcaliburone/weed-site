export default function Setlist({ setlist, onSelectedSetlist }) {
    return(
        <li onClick={() => onSelectedSetlist(setlist.mal_id)}>
            <img src={setlist.image} alt={`${setlist.title} cover`} />
            <h3>{setlist.title}</h3>
            <div>
                <p><span>{setlist.year}</span></p>
            </div>
        </li>
    )
}