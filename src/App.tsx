import './App.css'
import { Item } from './componets/Item'
import { useItems } from './hooks/useItems'
import { handleSubmit } from './helpers/formUtils'

export type ItemId = `${string}-${string}-${string}-${string}-${string}`

export interface Item {
  id: ItemId
  timestamp: number
  text: string
}

function App() {
  const { items, addItem, removeItem } = useItems()

  const handleSubmitCallback = (event: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(event, addItem);
  };

  const createHandleRemoveItem = (id: ItemId) => () => {
    removeItem(id)
  }

  return (
    <main>
      <aside>
        <h1> Prueba Tecnica</h1>
        <h2>Añadir y eliminar elementos a la lista</h2>
        <form onSubmit={handleSubmitCallback} aria-label='Add items to list'>
          <label>
            Elemento a Introducir:
            <input
              name='item'
              required
              type='text'
              placeholder='Video Juegos 🎮'
            />
          </label>
          <button>Añadir a la lista</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
        <ul>
          {items.length === 0 ? (
            <p>
              <strong>No hay elementos en la lista</strong>
            </p>
          ) : (
            items.map(item => {
              return (<Item
                {...item}
                handleClick={createHandleRemoveItem(item.id)}
                key={item.id} />
              )
            })
          )
          }
        </ul>
      </section>
    </main>
  )
}

export default App
