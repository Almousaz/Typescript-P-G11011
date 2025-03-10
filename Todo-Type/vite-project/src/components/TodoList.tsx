import { useContext } from 'react';
import TodoItems from './TodoItem';
import { NewContext } from './NewContext';

const TodoList = () => {
  const { todos } = useContext(NewContext);

  return (
    <>
      <ul className='list-reset'>
        {todos.map((item, index) => (
          <TodoItems key={index} todo={item} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
