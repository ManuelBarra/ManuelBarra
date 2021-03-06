import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionsTypes from '../redux/actions/actions.types';

function ToDo() {
  const toDos = useSelector((store) => store.toDos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const [index, setIndex] = useState();

  function create() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionsTypes.CREATE_TODO,
      toDo: inputValue,
    });

    setInputValue('');
  }

  function update() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionsTypes.UPDATE_TODO,
      toDo: inputValue,
      index,
    });

    setInputValue('');
  }

  return (
    <>
      <h1>ToDo List</h1>

      <input
        type="text"
        name="todo"
        value={inputValue}
        onChange={((event) => setInputValue(event.target.value))}
      />

      <button
        type="button"
        onClick={create}
      >
        create
      </button>
      <button
        type="button"
        onClick={update}
      >
        update
      </button>
      <ul>
        {
            toDos.map((toDo, toDoIndex) => (
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setInputValue(toDo);
                    setIndex(toDoIndex);
                  }}
                >
                  {toDo}

                </button>
                <button
                  type="button"
                  onClick={() => dispatch({
                    type: actionsTypes.DELETE_TODO,
                    toDo,
                  })}
                >
                  x
                </button>
              </li>
            ))
        }
      </ul>
    </>
  );
}

export default ToDo;
