


import { useEffect, useState } from "react"
import { Todos } from "./components/Todos"
import { type TodoTitle, type FilterValue, type TodoId, type Todo as TodoType, type ListOfTodo } from "./types"
import { TODO_FILTERS } from "./constants"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import React from "react"


const mockTodo = [

	{
		id: '1',
		title: 'tarea 1',
		completed: false
	}
	
]
	
	
	



const App = (): JSX.Element => {
  

	const [todos, setTodos] = useState(mockTodo)
	const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
	

	const handleRemove = ({ id }: TodoId): void => {
		const newTodo: ListOfTodo = todos.filter(todo => todo.id !== id)
		
		localStorage.setItem('todos', JSON.stringify(newTodo))
		setTodos(newTodo)
	}

	const handleComplete = (
		{id, completed}: Pick<TodoType, 'id' | 'completed' >
		): void =>{
			const newTodos = todos.map(todo=>{
				if (todo.id === id) {
					return {
						...todo,
						completed
					}
				}
				return todo
			})
		localStorage.setItem('todos', JSON.stringify(newTodos))
		setTodos(newTodos)
	}

	const handleFilterChange = (filter: FilterValue): void =>{
		setFilterSelected(filter)
	}

	const handleRemoveAllCompleted = (): void => {
		const newTodos = todos.filter(todo=> !todo.completed)
		localStorage.setItem('todos', JSON.stringify(newTodos))
		setTodos(newTodos)
	}

	const activeCount = todos.filter(todo=> !todo.completed).length
	const completedCount = todos.length - activeCount
	const filteredTodos = todos.filter(todo=>{
		if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
		if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
		return todo
	})

	const handleAddTodo = ({title}: TodoTitle): void =>{
		const newTodo = {
			title,
			id: crypto.randomUUID(),
			completed: false
		}
		const newTodos = [...todos, newTodo]
		setTodos(newTodos)
		localStorage.setItem('todos', JSON.stringify(newTodos))
		
	}

	const handleGetItem = (): void =>{
		if(window.localStorage.getItem('todos') !== null){
			const value = localStorage.getItem('todos')
			if(typeof value === 'string'){
				const parse: ListOfTodo = JSON.parse(value)
				console.log(parse)
				setTodos(parse)
				
			}
		}
		
	} 
	
	useEffect(()=>{
		handleGetItem()
		
	}, [])

  return (
	
   <div className="page">
	<div className="todoapp">
	<Header onAddTodo={handleAddTodo}/>
	
	<Todos 
	onToggleCompleteTodo={handleComplete}
	onRemoveTodo={handleRemove}
	todos={filteredTodos} />
	<Footer
		activeCount={activeCount}
		completedCount={completedCount}
		filterSelected={filterSelected}
		onClearCompleted={handleRemoveAllCompleted}
		handleFilterChange={handleFilterChange}
	
	/>

	
   </div>
   </div>
  )
}

export default App
