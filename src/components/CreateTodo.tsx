import { useState } from "react"
import { type TodoTitle } from "../types"
import React from "react"

interface Props{
    saveTodo: ({title}: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({saveTodo}) =>{

    const [inputValue, setInputValue] = useState('')

    const handleSubmmit = (event: React.FormEvent<HTMLFormElement>): void =>{
        event.preventDefault()
        saveTodo({title: inputValue})
        setInputValue('')
    }

    return(
       <form aria-label="form" onSubmit={handleSubmmit}>
         <input 
            className="new-todo"
            value={inputValue}
            onChange={(event)=>{ setInputValue(event.target.value) }}
            placeholder="¿Que quieres hacer?"
            autoFocus
        
        />
       </form>
    )
}