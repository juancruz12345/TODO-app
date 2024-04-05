import React from "react"
import { type FilterValue } from "../types"
import { Filters } from "./Filters"



interface Props {
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    onClearCompleted: () => void
    handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
    activeCount = 0,
    completedCount = 0,
    filterSelected,
    onClearCompleted,
    handleFilterChange
}) => {
    return(
        
        <div className="footer-div">
            <footer className="footer">
            

            <Filters 
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />

           
           

        </footer>
         <span className="todo-count">
                <strong>{activeCount} tareas pendientes </strong>
        </span>
        {
                completedCount > 0 && (
                    <button
                    className="clear-completed"
                    onClick={onClearCompleted}
                    >Borrar completados
                    </button>
                )
                
            }
        </div>
    )
}