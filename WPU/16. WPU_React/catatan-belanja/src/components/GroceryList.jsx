import PropTypes from 'prop-types'
import { useState } from 'react'
import Item from './Item';

export default function GroceryList({ items, onDeleteItem, onToggleItem, onClearItems }) {

    // const groceryItems = [
    //     {
    //         id: 1,
    //         name: 'Kopi Bubuk',
    //         quantity: 2,
    //         checked: true,
    //     },
    //     {
    //         id: 2,
    //         name: 'Gula Pasir',
    //         quantity: 5,
    //         checked: false,
    //     },
    //     {
    //         id: 3,
    //         name: 'Air Mineral',
    //         quantity: 3,
    //         checked: false,
    //     },
    // ];

    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    switch(sortBy) {
        case 'name':
            sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'checked':
            sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
            break;
        default:
            sortedItems = items;
            break;
    }

    return(
        <>
            <div className="list">
                <ul>
                    {sortedItems.map((item) => (
                        <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
                    ))}
                </ul>
            </div>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Urutkan berdasarkan urutan input</option>
                    <option value="name">Urutkan berdasarkan nama barang</option>
                    <option value="checked">Urutkan berdasarkan ceklis</option>
                </select>
                <button onClick={onClearItems}>Bersihkan Daftar</button>
            </div>
        </>
    )
}

GroceryList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
            checked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    // setItems: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onToggleItem: PropTypes.func.isRequired,
    onClearItems: PropTypes.func.isRequired,
}