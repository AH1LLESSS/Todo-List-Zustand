import { useState} from 'react'
import { useTodoList } from './Brains';


export  const useLogicTodo =() =>{
     const [text,setText] = useState<string>("");
     const [prioritet,setPrioritet] = useState<number | undefined>(undefined);
     const [comment, setComment] = useState<string>("");
     const [bordercolora, setBorderColor] =useState<string>("rgb(160, 72, 0)");
     const [textColor,setTextColor ] =useState<string>("rgb(145, 145, 145)");
     const [name, setName] =useState<string>("");
     const [targetColor, setTargetColor] =useState<"border" | "text">("border");
     const [Colorsettingsopen, setColorsettingsopen] = useState<boolean>(false)

     const addTodo = useTodoList(state => state.addTodo)
     
     const NewTodo = () =>{
 
      const readyprioritet = prioritet === undefined ? 1 : prioritet;
        
        const todoData ={
           id: Date.now(),
           text: text.trim(),
           name: name,
           prioritet: readyprioritet,
           comment: comment.trim(),
           bordercolora: bordercolora,
           textColor: textColor
        }
     
       addTodo(todoData);
       
       setText("")
       setPrioritet(undefined)
       setComment("")
       setBorderColor("rgb(160, 72, 0)")
       setTextColor("rgb(145, 145, 145)")
       setName("")
    }

    return {
        text,
        setText,
        prioritet,
        setPrioritet,
        comment,
         setComment,
         bordercolora,
        setBorderColor,
        textColor,
        setTextColor,
        NewTodo,
        name,
        setName,
        targetColor,
        setTargetColor,
        Colorsettingsopen, 
        setColorsettingsopen
    }
}







