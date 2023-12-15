
export default function SetlistDetail({ selectedSetlist }) {

    return(
        <div className="details">
            <header>
                <img src={selectedSetlist.image} alt={`${selectedSetlist.title} cover`} />

                <div className="details-overview">
                    <h2>{selectedSetlist.title}</h2>
                    <p>{selectedSetlist.year} &bull; {selectedSetlist.score}</p>
                </div>
            </header>
            <section>
                <p className="synopsis"><em>{selectedSetlist.synopsis}</em></p>
            </section>
        </div>
    )
}

