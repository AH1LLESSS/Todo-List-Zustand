import clsx from "clsx";



export const TodoItemClass =clsx(
    'TodoItem'
)



export const TodoInputMenuClassg = ( formColorsettingsopen: boolean) => clsx(
    'InputMenu',
    formColorsettingsopen  && 'Enter'
)




