import React from 'react'

function Item({ item, onDeletion, onToggleItem }) {

    return (
        <li>
            <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.description} {item.quantity}</span>
            <button onClick={() => onDeletion(item.id)}>❌</button></li >
    )
}

export default Item
