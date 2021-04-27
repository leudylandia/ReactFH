
export const todoReducer = (state = [], action)=>{
    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete':
            return state.filter(todo => todo.id !== action.payload) //Tambien pudo ser action.payload.id pero no estoy mandando el objeto solo el id

        case 'toggle':


        case 'toggle-old':
            return state.map(item =>{
                if(item.id === action.payload){
                    return {
                        ...item,
                        done: !item.done
                    }
                }
                else{
                    return item;
                }
            })
    
        default:
            return state;
    }
}
