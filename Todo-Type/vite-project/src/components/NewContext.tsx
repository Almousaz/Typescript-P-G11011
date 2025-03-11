import { createContext, ReactNode, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id: string;
  name: string;
  status: boolean;
}

interface ContextType {
  todos: Todo[];
  addTodo: (event: React.KeyboardEvent) => void;
  statusHandler: (todoId: string) => void;
  removeTodoHandler: (todoId: string) => void;
  changeHandler: (todoId: string, newName: string) => void;
}

export const NewContext = createContext({} as ContextType);

export function AppDataProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos
      ? JSON.parse(storedTodos)
      : [
          { id: uuidv4(), name: 'Going to Gym', status: true },
          { id: uuidv4(), name: 'Watching movie at 10', status: false },
          { id: uuidv4(), name: 'Eating Breakfast', status: false },
        ];
  });

  useEffect(
    () => localStorage.setItem('todos', JSON.stringify(todos)),
    [todos]
  );

  function addTodo(event: React.KeyboardEvent) {
    if ((event.target as HTMLInputElement).value.trim() === '') return;

    if (event.key === 'Enter') {
      const newTodo = {
        id: uuidv4(),
        name: (event.target as HTMLInputElement).value.trim(),
        status: false,
      };
      setTodos([...todos, newTodo]);
      (event.target as HTMLInputElement).value = '';
    }
  }
  function statusHandler(todoId: string) {
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
  function removeTodoHandler(todoId: string) {
    const updateTodos = todos.filter((item) => {
      return item.id != todoId;
    });
    setTodos(updateTodos);
  }
  function changeHandler(todoId: string, newName: string) {
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
