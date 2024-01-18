import React from 'react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('<App />', () => {
    test('should add items and remove them', async () => {
        const user = userEvent.setup()

        render(<App />)

        // buscar el input
        const input = screen.getByRole('textbox')
        expect(input).toBeDefined()

        // buscar el form
        const form = screen.getByRole('form')
        expect(form).toBeDefined()

        // buscar el button en el form
        const button = form.querySelector('button')
        expect(button).toBeDefined()

        const randomText = crypto.randomUUID()
        await user.type(input, randomText)
        await user.click(button!)


        // recuperar lista
        const list = screen.getByRole('list')
        expect(list).toBeDefined()

        // screen.debug()

        // corroborar que se agrego el id, toma la lista y ve si la cantidad es 1
        expect(list.childNodes.length).toBe(1)


        // asegurar que se puede borrar el item 
        const item = screen.getByText(randomText)
        const removeButton = item.querySelector('button')
        expect(removeButton).toBeDefined()

        await user.click(removeButton!)

        // corroborar que cuando se borro el unico elemento que se agrego se renderiza el mensaje 'No hay elementos en la lista'
        const noResults = screen.getByText('No hay elementos en la lista')
        expect(noResults).toBeDefined()

    })
})