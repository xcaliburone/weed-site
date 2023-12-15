import styles from './ContactCard.module.css';
import profilePic from '../../assets/profilePic.png'
import trashBin from '../../assets/trashBin.png'

// setiap card menampilkan profil, nama, email, telp berdasarkan inputan user
// fitur: delete card, delete all card, urutkan, stats

export default function ContactCard() {
    return (
        <div className={styles.container}>
            <h1>TEST</h1>
            <div className={styles.cards}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

function Card() {
    return (
        <div className={styles.card}>
            <img src={profilePic} alt="profile-pic" className={styles.profile} />
            <div className={styles.content}>
                <p>username</p>
                <p>email</p>
                <p>telp</p>
            </div>
            <img src={trashBin} className={styles.trashBin} />
        </div>
    );
}
