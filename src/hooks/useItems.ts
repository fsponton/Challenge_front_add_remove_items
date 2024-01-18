import { useState } from "react"
import { ItemId, type Item } from "../App"

export const useItems = () => {
    const [items, setItems] = useState<Item[]>([])

    const addItem = (text: string) => {

        const newItem: Item = {
            id: crypto.randomUUID(),
            text,
            timestamp: Date.now()
        }

        setItems((prevItems) => {
            return [...prevItems, newItem]
        })
    }

    const removeItem = (id: ItemId) => {
        setItems((prevItems) => {
            return prevItems.filter(currentItems => currentItems.id !== id)
        })
    }

    return {
        items,
        addItem,
        removeItem
    }
}