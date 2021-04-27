
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, accion) =>{

    if(accion?.type === 'agregar'){
        return [...state, accion.payload]
    }
    return state;
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction)

console.table(todos)