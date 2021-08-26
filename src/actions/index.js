export const COUNTPLUS='countPlus'
export const COUNTMINUS='countMinus'
export const ADDTODOS='addTodo'
export const DELETETODOS='deleteTodo'




export const countPlus = () =>({
    
     type: COUNTPLUS
    
})

export const countMinus= () =>({
    
    type: COUNTMINUS
   
})

export const addTodo= (todos) =>({
    
    type: ADDTODOS,
    name:todos
   
})

export const deleteTodo= (index) =>({
    
    type: DELETETODOS,
    name:index
})



