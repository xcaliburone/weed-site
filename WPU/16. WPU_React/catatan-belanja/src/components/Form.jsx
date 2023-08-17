import { useState } from "react"
import PropTypes from 'prop-types'

export default function Form({ onAddItem }) {

    const [name, setName] = useState('');

    const [quantity, setQuantity] = useState(1);


    function handleSumbit(e) {
        e.preventDefault();

        if(!name) return;
        // alert(name);
        // const newItem = { name: name, quantity: quantity }
        const newItem = { name, quantity, checked: false, id: Date.now() }

        onAddItem(newItem)

        console.log(newItem)
    
        setName(''); //set default
        setQuantity(1); //set default

    }

    const quantityNum = [...Array(20)].map((_, i) => (
        <option value={i + 1} key={i + 1}>
            {i + 1}
        </option>
    ))

    return(
        <form className="add-form" onSubmit={handleSumbit}>
            <h3>Hari ini belanja apa kita?</h3>

            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {quantityNum}
            </select>

            <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />

            <button>Tambah</button>
        </form>
    )
}

Form.propTypes = {
    onAddItem: PropTypes.func.isRequired,
}