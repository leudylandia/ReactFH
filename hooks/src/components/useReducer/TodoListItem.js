import React from 'react'

export const TodoListItem = ({item, index, handleDelete, handleToggle}) => {
    return (
        <li key={item.id} className="list-group-item">
            <p className={`${item.done && 'complete'}`}
                onClick={() => handleToggle(item.id)}
            ><b>{index + 1}.</b> {item.desc}</p>

            <button 
                className="btn btn-warning"
                onClick={() => handleDelete(item.id)}
                >Borrar {item.id}</button>
        </li>
    )
}
