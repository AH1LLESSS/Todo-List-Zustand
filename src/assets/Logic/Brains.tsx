import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Todo, TodoListType } from './types';





export const useTodoList = create<TodoListType>()(
    persist(
        (set,get)=>({
        todos: [],
        
            formText: '',
            formPrioritet: undefined,
            formComment: '',
            formBorderColor: 'rgb(160, 72, 0)',
            formTextColor: 'rgb(145, 145, 145)',
            formName: '',
            formTargetColor: 'border',
            formColorsettingsopen: false,
        
            setFormText: (text) => set({ formText: text }),
            setFormPrioritet: (prioritet) => set({ formPrioritet: prioritet }),
            setFormComment: (comment) => set({ formComment: comment }),
            setFormBorderColor: (color) => set({ formBorderColor: color }),
            setFormTextColor: (color) => set({ formTextColor: color }),
            setFormName: (name) => set({ formName: name }),
            setFormTargetColor: (target) => set({ formTargetColor: target }),
            setFormColorsettingsopen: (open) => set({ formColorsettingsopen: open }),
        
            addTodo: () => {
                const state = get(); 
                const { formText, formName, formPrioritet, formComment, formBorderColor, formTextColor } = state;
        
                if (!formText.trim() || !formName.trim()) {
                    console.log('Заполните обязательные поля');
                    return;
                }

        
                const newTodo: Todo = {
                    id: Date.now(),
                    text: formText.trim(),
                    name: formName.trim(),
                    prioritet: formPrioritet ?? 1,
                    comment: formComment.trim(),
                    bordercolora: formBorderColor,
                    textColor: formTextColor,
                };
        
        
        
        set((state)=>({
          todos:
          [...state.todos, newTodo]
        }
        
        ))
        
        get().resetForm();
        },
        
        deleteTodos: () => set({ todos: [] }),
        removeTodo: (id) => set((state) => ({
           todos: state.todos.filter(todo => todo.id !== id)
        })),
        
        resetForm: () => set({
            formText: '',
            formPrioritet: undefined,
            formComment: '',
            formBorderColor: 'rgb(160, 72, 0)',
            formTextColor: 'rgb(145, 145, 145)',
            formName: '',
        }),
       
    
    }),
    { name: 'todo-storage',  partialize: (state) => ({ todos: state.todos })}
    ) 
)


