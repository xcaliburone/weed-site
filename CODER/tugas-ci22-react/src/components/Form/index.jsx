import styles from './Form.module.css'

// user bisa memasukkan nama, email, telp. profil
// inputan user akan dikirim menjadi card ketika user menekan tombol "tambahkan"

export default function Form() {

    return(
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <h1>Form Card</h1>

                <div className={styles.input}>
                    <input type="text" placeholder='username' />
                </div>
                <div className={styles.input}>
                    <input type="email" placeholder='email' />
                </div>
                <div className={styles.input}>
                    <input type="tel" placeholder='no. telp' />
                </div>
                <p>Masukkan foto profil:</p>
                <input type="file" accept="image/*"></input>

                <button>Tambahkan</button>
            </form>
        </div>
    );
}