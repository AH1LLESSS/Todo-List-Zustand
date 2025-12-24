import { useTodoList } from "../Logic/Brains";
import { useMemo } from "react";
import { Buttona, Buttong, TodoItemSection } from "./styledComp";
import {  TodoItemClass, TodoInputMenuClassg } from "./clsx";
import type { TodoItemProps } from "../Logic/types";



//Лист
export function TodoListPush() {
    const todos = useTodoList(state=> state.todos);
    const deleteTodos = useTodoList(state=>state.deleteTodos);
    
   
    const SortTodos = useMemo(() => {
      return [...todos].sort((a,b)=>  b.prioritet - a.prioritet)
      },[todos])
    
    return(
     <> 
     <Buttong onClick={deleteTodos}>Удалить все данные</Buttong> 
     <section className="TodoPushCore"> 
          { todos.length === 0 ? (
          <p>Привет, сделай свою первую задачу</p>) :  (
            
            SortTodos.map(todo=>(
            <TodoItem key={todo.id} todoData={todo}/>)
           )
         )
            }
       
        </section>
        </>
    )
}





//Доп настройки
function SettingsPanel() {
    const {
        formPrioritet,
        formBorderColor,
        formTextColor,
        formColorsettingsopen,
        setFormPrioritet,
        setFormTargetColor,
        setFormColorsettingsopen
    } = useTodoList();
    
    return (
        <section className="SettingsPanel">
            <button 
                onClick={() => {
                    setFormColorsettingsopen(!formColorsettingsopen);
                    setFormTargetColor("border");
                }}
                style={{
                    textDecoration: 'none',
                    border: `0.4vh solid ${formBorderColor}`
                }}
            >
                Цвет границы
            </button>
            
            <button 
                onClick={() => {
                    setFormColorsettingsopen(!formColorsettingsopen);
                    setFormTargetColor("text");
                }}
                style={{
                    textDecoration: 'none',
                    border: `0.4vh solid ${formTextColor}`
                }}
            >
                Цвет текста
            </button>
            
            <input 
                type="number" 
                placeholder="Введите приоритет" 
                value={formPrioritet ?? ""}
                onChange={(e) => {
                    setFormPrioritet(e.target.value === "" ? undefined : Number(e.target.value));
                }}
            />
        </section>
    );
}

//Панель целиком
export function TodoListInputMenu() {
    
   
    const {
        formText,
        formComment,
        formName,
        formColorsettingsopen,
        setFormText,
        setFormComment,
        setFormName,
        addTodo
    } = useTodoList();

    const TodoInputMenuClass = TodoInputMenuClassg(formColorsettingsopen);
   
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        addTodo();
    };

    return (
        <>
            <form 
                className={TodoInputMenuClass} 
                onSubmit={handleSubmit}
            >
                <textarea 
                    placeholder="Введите текст задачи" 
                    className="Inputtextarea" 
                    value={formText} 
                    onChange={(e) => setFormText(e.target.value)}
                />
                
                <SettingsPanel/>
                
                {formColorsettingsopen && (
                    <ColorPickers
                    />
                )}
                
                <input 
                    placeholder="Введите свой комментарий" 
                    className="InputComent" 
                    value={formComment} 
                    onChange={(e) => setFormComment(e.target.value)}
                />
                
                <input 
                    placeholder="Введите название задачи" 
                    className="InputNick" 
                    value={formName} 
                    onChange={(e) => setFormName(e.target.value)}
                />
                
                <button className="CreateBTN" type="submit">
                    Создать
                </button>
            </form>
        </>
    );
}




   
   
   
   





function TodoItem({todoData} : TodoItemProps){
  const removeTodo = useTodoList(state=> state.removeTodo);
  
  
   
  
   return(
         <TodoItemSection className={TodoItemClass} $bordercolora={todoData.bordercolora}
         $textColor={todoData.textColor} style={{
          borderColor: todoData.bordercolora 
         }}>
           <div className="TodoItemHiddenContain">
             <h6 >Название: {todoData.name}</h6>
             <h5 >{todoData.prioritet}</h5></div>  
             <div className="TodoItemMiddleContain">   
             {todoData.text.length < 100 ? 
             <p style={{
                color: todoData.textColor}}>{todoData.text}</p> :<h3  > Соболезнум но ваш текст слишком большой...</h3>}</div>
             <div className="TodoItemBottomContain">   
            {todoData.comment && (
            <h4>Заметка: "{todoData.comment}"</h4>
             )} 
             <button onClick={()=>removeTodo(todoData.id)}>Удалить</button>
             </div>
         </TodoItemSection>

  )

}



export function ColorPickers() {
  const {
      formTargetColor,
      setFormBorderColor,
      setFormTextColor
  } = useTodoList();

  const setColor = formTargetColor === "border" ? setFormBorderColor : setFormTextColor;

  const BTN_COLORS = [
      { name: 'черный', value: 'rgb(0, 0, 0)' },
      { name: 'красный', value: 'rgb(66, 0, 0)' },
      { name: 'синий', value: 'rgb(0, 0, 255)' },
      { name: 'голубой', value: 'rgb(0, 255, 255)' },
      { name: 'зелёный', value: 'rgb(0, 128, 0)' },
      { name: 'фиолетовый', value: 'rgb(128, 0, 128)' },
  ];
  
  return ( 
      <div className="ColorSettings">
          {BTN_COLORS.map(color => (
              <Buttona 
                  key={color.value}
                  onClick={() => setColor(color.value)}
                  style={{
                      borderColor: color.value,
                      color: color.value
                  }}
                  $bordercolor={color.value}
              >
                  {color.name}
              </Buttona>
          ))}
      </div>
  );
}






