import { ADDTODOS,DELETETODOS } from "../actions";

const initialState ={todoList:[]}

const TodoEvent =(state = initialState,action)=>{
    switch(action.type){
        case ADDTODOS:
            return {todoList:state.todoList.concat(action.name)}
        case DELETETODOS: 
        const ii =state.todoList
        const newTodos=[...ii]
        newTodos.splice(action.name,1);
        return {todoList:newTodos}
        default:
            return state
    }
}

export default TodoEvent