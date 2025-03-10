import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export let NewContext = createContext();

export function AppDataProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: 'Going to Gym', status: true },
    { id: uuidv4(), name: 'Watching movie at 10', status: false },
    { id: uuidv4(), name: 'Eating Breakfast', status: false },
  ]);

  function addTodo(event) {
    if (event.target.value.trim() === '') return;

    if (event.key === 'Enter') {
      const newTodo = {
        id: uuidv4(),
        name: event.target.value.trim(),
        status: false,
      };
      setTodos([...todos, newTodo]);
      event.target.value = '';
    }
  }
  function statusHandler(todoId) {
    // console.log(todoId)
    const updateTodos = todos.map((item) => {
      if (item.id == todoId) {
        item.status = !item.status;
        return item;
      }
      return item;
    });
    setTodos(updateTodos);
  }
  function removeTodoHandler(todoId) {
    const updateTodos = todos.filter((item) => {
      return item.id != todoId;
    });
    setTodos(updateTodos);
  }
  function changeHandler(todoId, newName) {
    const updatedTodos = todos.map((item) => {
      if (item.id == todoId) {
        item.name = newName;
        return item;
      }
      return item;
    });
    setTodos(updatedTodos);
  }

  return (
    <NewContext.Provider
      value={{
        todos,
        addTodo,
        statusHandler,
        removeTodoHandler,
        changeHandler,
      }}
    >
      {children}
    </NewContext.Provider>
  );
}
