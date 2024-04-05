import {describe, expect, test, it} from 'vitest'
import {fireEvent, render, screen, act} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import App from '../src/App'
import React from 'react'


describe('<App/>',()=>{
    test('should be render app', async()=>{

        const user = userEvent.setup()
        render(<App/>)
        
        
        const title = screen.getByText('Tareas')
        expect(title).toBeDefined()
        const input = screen.getByRole('textbox')
        expect(input).toBeDefined()
        const form = screen.getByLabelText('form')
        expect(form).toBeDefined()
        const list = screen.getByLabelText('todo-list')
        expect(list).toBeDefined()
        expect(list.childNodes.length).toBe(1)
        
        const randomText = crypto.randomUUID()
        await user.type(input,randomText)
        await fireEvent.submit(form)
        expect(list.childNodes.length).toBe(2)
        
        const item = list.children[1]
        expect(item).toBeDefined()
        const removeBtn = item.querySelector('button')
        expect(removeBtn).toBeDefined()
        await user.click(removeBtn!)
        expect(list.childNodes.length).toBe(1)
        
       
        
        
       

    })
})