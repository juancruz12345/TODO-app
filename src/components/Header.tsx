import React from "react"
import { type TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
    onAddTodo: ({title}: TodoTitle) => void
}

export const Header: React.FC<Props> = ({onAddTodo}) =>{
    return(
       <header>
        <h1>Tareas</h1>
        <CreateTodo saveTodo={onAddTodo} />
       </header>
    )
}