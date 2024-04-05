


import React from "react"
import { type Todo as TodoType, type TodoId, type ListOfTodo } from "../types"
import { Todo } from "./Todo"



interface Props {

	todos: ListOfTodo
	onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed' >) => void
	onRemoveTodo: (id: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {

	return(
		<ul aria-label="todo-list" className="todo-list">
			{
				todos.map(todo => (
					<li key={todo.id} className={`${todo.completed ? 'complete' : ''} `}>
						<Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} onRemoveTodo={onRemoveTodo} onToggleCompleteTodo={onToggleCompleteTodo} />
					</li>
				))
				
			}
		</ul>
	)
}