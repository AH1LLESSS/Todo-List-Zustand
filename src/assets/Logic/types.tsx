
export interface TodoListType{
    formText: string;
    formPrioritet: number | undefined;
    formComment: string;
    formBorderColor: string;
    formTextColor: string;
    formName: string;
    formTargetColor: 'border' | 'text';
    formColorsettingsopen: boolean;
    setFormText: (text: string) => void;
    setFormPrioritet: (prioritet: number | undefined) => void;
    setFormComment: (comment: string) => void;
    setFormBorderColor: (color: string) => void;
    setFormTextColor: (color: string) => void;
    setFormName: (name: string) => void;
    setFormTargetColor: (target: 'border' | 'text') => void;
    setFormColorsettingsopen: (open: boolean) => void;
    todos: Todo[];
    addTodo: () => void;
    deleteTodos: () => void;
    removeTodo: (id: number) => void;
    resetForm: () => void;
}

export interface Todo{
    id: number,
    text: string,
    name: string,
    prioritet: number,
    comment?: string,
    bordercolora: string,
    textColor: string
}


export interface TodoItemProps {
    todoData: {
        id: number;
        name: string;
        text: string;
        prioritet: number;
        comment?: string;
        bordercolora: string;
        textColor: string;
    };
  }














