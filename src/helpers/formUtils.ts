export const handleSubmit = (event: React.FormEvent<HTMLFormElement>, addItem: (input: string) => void) => {
    event.preventDefault()

    const { elements } = event.currentTarget

    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return

    addItem(input.value)

    input.value = ''
}
