import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/action.types';
// eslint-disable-next-line no-unused-vars
import styles from '../styles/ToDo.css';

function ToDo() {
  const toDos = useSelector((store) => store.toDos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const [index, setIndex] = useState();

  function create() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionTypes.CREATE_TODO,
      toDo: inputValue
    });

    setInputValue('');
  }

  function update() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionTypes.UPDATE_TODO,
      toDo: inputValue,
      index
    });

    setInputValue('');
  }

  return (
    <>
      <h1>ToDo List</h1>
      <div className="main-container">

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
          Add Task
        </button>
        <button
          type="button"
          onClick={update}
        >
          Update Task
        </button>
      </div>
      <ul className="todo-list">
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
                    type: actionTypes.DELETE_TODO,
                    toDo
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
