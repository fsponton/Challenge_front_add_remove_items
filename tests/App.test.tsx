import React from 'react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('<App />', () => {
    // test('should work', () => {
    //     render(<App />)

    //     //muestra el HTML
    //     // screen.debug()

    //     //se fija que este el string en el html, si es diferente falla.
    //     expect(screen.getByText('Prueba Tecnica')).toBeDefined()
    // })

    test('should add items and remove them', async () => {
        const user = userEvent.setup()

        render(<App />)

        // buscar el input
        const input = screen.getByRole('textbox')
        expect(input).toBeDefined()

        // buscar el form
        const form = screen.getByRole('form')
        expect(form).toBeDefined()


        const button = form.querySelector('button')
        expect(button).toBeDefined()

        const randomText = crypto.randomUUID()
        await user.type(input, randomText)
        await user.click(button!)


        //recuperar list
        const list = screen.getByRole('list')
        expect(list).toBeDefined()

        // screen.debug()
        //corroborar que se agrego el juego metal gear, tomando la lista y viendo la cantidad que tiene si es igual a 1
        expect(list.childNodes.length).toBe(1)


        // asegurar que se puede borrar el item 
        const item = screen.getByText(randomText)
        const removeButton = item.querySelector('button')
        expect(removeButton).toBeDefined()

        await user.click(removeButton!)

        const noResults = screen.getByText('No hay elementos en la lista')
        expect(noResults).toBeDefined()

    })
})