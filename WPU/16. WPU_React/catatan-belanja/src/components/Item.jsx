import PropTypes from "prop-types"

export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (

        <li key={item.id}>
            <input type="checkbox" onChange={() => onToggleItem(item.id)} checked={item.checked} />
            <span style={ item.checked ? { textDecoration: 'line-through' } : {} }>
                {item.quantity} {item.name}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>&times;</button>
        </li>

    )
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        checked: PropTypes.bool.isRequired,
    }).isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onToggleItem: PropTypes.func.isRequired,
}