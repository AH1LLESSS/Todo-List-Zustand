import clsx from "clsx";



export const TodoItemClass =clsx(
    'TodoItem'
)



export const TodoInputMenuClassg = (Colorsettingsopen: boolean) => clsx(
    'InputMenu',
    Colorsettingsopen  && 'Enter'
)




