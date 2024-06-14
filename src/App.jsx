import React, { useState } from 'react'
import Logo from './Component/Logo'
import Form from './Component/Form'
import PackingList from './Component/PackingList'
import Stats from './Component/Stats'




function App() {

  const [Items, setItems] = useState([])

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }


  function handleOnDeletion(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleClearCart() {

    const confirmed = window.confirm("Are you sure you want to delete all items?")

    if (confirmed) setItems([])
  }


  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList items={Items} onDeletion={handleOnDeletion} onToggleItem={handleToggleItem} onClearCart={handleClearCart} />
        <Stats items={Items} />
      </div>
    </>
  )
}

export default App
