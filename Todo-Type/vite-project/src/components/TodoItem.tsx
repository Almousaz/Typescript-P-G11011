import { useContext, useState } from 'react';
import EditTodoIcon from './EditTodoIcon';
import DeleteTodoIcon from './DeleteTodoIcon';
import { NewContext } from './NewContext';

const TodoItems = ({ todo }) => {
  const { changeHandler, statusHandler } = useContext(NewContext);
  const [editMode, setEditMode] = useState(false);

  function closeInput(event) {
    if (event.key == 'Enter') {
      changeHandler(todo.id, event.target.value);
      setEditMode(false);
    }
  }

  return (
    <>
      <li className='relative flex items-center justify-between px-2 py-6 border-b'>
        {editMode ? (
          <input
            onKeyDown={() => {
              closeInput(event);
            }}
            defaultValue={todo.name}
            className='w-full px-2 py-3 border rounded outline-none border-grey-600'
            type='text'
          />
        ) : (
          <div>
            <div>
              <input
                type='checkbox'
                className=''
                checked={todo.status}
                onChange={() => {
                  statusHandler(todo.id);
                }}
              />
              <p
                className={`inline-block mt-1 ml-2 text-gray-600 ${
                  todo.status ? 'line-through' : ''
                }`}
              >
                {todo.name}
              </p>
            </div>
            <button
              type='button'
              className='absolute right-0 flex items-center space-x-1'
            >
              <EditTodoIcon setEditMode={setEditMode} />
              <DeleteTodoIcon todo={todo} />
            </button>
          </div>
        )}
      </li>
    </>
  );
};

export default TodoItems;
