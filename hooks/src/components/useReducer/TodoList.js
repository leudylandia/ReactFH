import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
            <ul className="list-group list-group-flush">
                {
                    todos.map((item, index) =>(
                        <TodoListItem 
                            key={item.index}
                            item={item}
                            index={index}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />
                    ))
                }
            </ul>
    )
}
