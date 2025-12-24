import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface TodoListType{
    Todos: Todo[];
    addTodo: (todoData: Todo) => void;
    deleteTodos: () => void;
    removeTodo: (id : number) => void
}

interface Todo{
    id: number,
    text: string,
    name: string,
    prioritet: number,
    comment?: string,
    bordercolora: string,
    textColor: string
}


export const useTodoList = create<TodoListType>()(
    persist(
        (set,get)=>({
        Todos: [],
        addTodo: (todoData : Todo) =>{
        
        if (!todoData.text.trim()){
            console.log("Что ты мне прислал чурка")
            return
        }
        if (!todoData){
            console.log("Где то что ты мне прислал чурка")
            return
        }
        
        if (!todoData.name.trim()){
            console.log("Где то что ты мне прислал чурка")
            return
        }

        set((state)=>({
          Todos:
          [...state.Todos, todoData]
        }
        
        ))},
        
        deleteTodos: () =>{
            set({Todos: []})
        },
        removeTodo:(id) =>{
            set((state)=>({
                Todos:
               state.Todos.filter(todo=> todo.id !== id)
            }))
        }
    
       
    
    }),
    { name: 'todo-storage' }
    ) 
)


