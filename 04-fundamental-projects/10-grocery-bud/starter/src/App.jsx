import { useState } from "react";
import Form from "./Form";
import { nanoid } from 'nanoid'
import Items from "./Items";

export const App = () => {
  const [items, setItems] = useState([])

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid()
    }
    setItems([...items, newItem])
  }

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems);
  }

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  )
};

