import { useTodoList } from "../Logic/Brains";
import { useLogicTodo } from "../Logic/Logical"
import { useMemo } from "react";
import { Buttona, Buttong, TodoItemSection } from "./styledComp";
import {  TodoItemClass, TodoInputMenuClassg } from "./clsx";


//Лист
export function TodoListPush() {
    const todos = useTodoList(state=> state.Todos);
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
            <TodoItem key={todo.id}  todoData={todo}/>)
           )
         )
            }
       
        </section>
        </>
    )
}



interface SettingsPanelProps {
    prioritet: number | undefined;
    setPrioritet: (val: number | undefined) => void;
    targetColor: "border" | "text",
    setTargetColor: (color: "border" | "text") =>void,
    Colorsettingsopen: boolean,
    setColorsettingsopen: (Colorsettingsopen: boolean) => void,
    bordercolora: string,
    textColor: string
}

//Доп настройки
function SettingsPanel({ prioritet, setPrioritet, setTargetColor,
Colorsettingsopen, setColorsettingsopen, textColor, bordercolora }: SettingsPanelProps){
   
  
    
  return(
         
         <section className="SettingsPanel">
         <button onClick={()=> {
            setColorsettingsopen(!Colorsettingsopen)
            setTargetColor("border")}}
             style={{
              textDecoration: 'none',
              border: `0.4vh solid ${bordercolora}`
             }}>Цвет границы</button>
         <button onClick={()=>{
            setColorsettingsopen(!Colorsettingsopen)
            setTargetColor("text")}} style={{
              textDecoration: 'none',
              border: `0.4vh solid ${textColor}`
            }}>Цвет текста</button>
         <input type="number" placeholder="Введите приоритет" value={prioritet ?? ""}
           onChange={(e) => {
            setPrioritet(e.target.value === "" ? undefined : Number(e.target.value))}
            }/>
          
         </section>
         
    )


}

//Панель целиком
export function TodoListInputMenu(){
  
    const {comment, setComment, text, setText, NewTodo, name, setName,
        prioritet, setPrioritet,setBorderColor,textColor,setTextColor,
        targetColor, setTargetColor,Colorsettingsopen, setColorsettingsopen, bordercolora
       } = useLogicTodo();

    
      const TodoInputMenuClass = TodoInputMenuClassg(Colorsettingsopen);
       
      return(
      <>
     <form className={TodoInputMenuClass} onSubmit={(e)=> e.preventDefault()}
     >
        <textarea placeholder="Введите текст  задачи" className="Inputtextarea" value={text ?? ""} onChange={
            (e)=>{  
            setText(String(e.target.value))
        }}/>
        <SettingsPanel
         prioritet={prioritet}
        setPrioritet={setPrioritet} 
        targetColor={targetColor}
        setTargetColor={setTargetColor}
        Colorsettingsopen={Colorsettingsopen}
        setColorsettingsopen={setColorsettingsopen}
        bordercolora={bordercolora}
        textColor={textColor}
        />
       { Colorsettingsopen && 
        <ColorPickers    
        setBorderColor={setBorderColor}
        textColor={textColor}
        setTextColor={setTextColor}
        targetColor={targetColor}
        setTargetColor={setTargetColor}/>  } 
        
         
        <input placeholder="Введите свой коментарий" className="InputComent" value={comment ?? ""} onChange={
            (e)=>{
            setComment(String(e.target.value))
            }} />
            <input placeholder="Введите название задачи" className="InputNick" value={name ?? ""} onChange={
                (e)=>{
            setName(String(e.target.value))
            }} />
        <button className="CreateBTN" onClick={NewTodo}  type="submit">Создать</button>
        

 
       </form>
       
    </>    
)
}



   
   
   
   
interface  TodoItemProps{
    todoData: {
        id: number,
        name: string,
        text: string,
        prioritet: number,
        comment?: string,
        bordercolora: string,
        textColor: string
    }
   
    
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

interface ColorPickerstype{
 setBorderColor: (color: string) => void,
 textColor: string ,
 setTextColor:(color: string) => void
 targetColor: string,
 setTargetColor: (color:  "border" | "text" ) =>void,

}

export function ColorPickers({setBorderColor, setTextColor, targetColor
}: ColorPickerstype ) {

    const setColor = targetColor === "border" ? setBorderColor : setTextColor

    const BTN_COLORS =[
        { name: 'черный', value: 'rgb(0, 0, 0)' },
        { name: 'красный', value: 'rgb(66, 0, 0)' },
        { name: 'синий', value: 'rgb(0, 0, 255)' },
        { name: 'голубой', value: 'rgb(0, 255, 255)' },
        { name: 'зелёный', value: 'rgb(0, 128, 0)' },
        { name: 'фиолетовый', value: 'rgb(128, 0, 128)' },
    ]

     
     
    
    
    
    return ( 
        <>
        <div className="ColorSettings">
          {BTN_COLORS.map(color => (
            <Buttona style={{
                borderColor: color.value,
                color: color.value
            }}
              key={color.value}
              onClick={() => setColor(color.value)}
              $bordercolor={color.value}
            >{color.name}</Buttona>
          ))}
        </div>
        </>
    )  
}








