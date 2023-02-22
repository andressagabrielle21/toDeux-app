import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import style from '../styles/modules/modal.module.scss';
import Button, { SelectButton } from './Button';

function ToDoModal({ setOpenModal }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ^ So that it won't reload the whole page when submit the form
    console.log({ title, status });
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <button
          type="button"
          className={style.closeButton}
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <MdOutlineClose />
        </button>
        <form className={style.form}>
          <h1 className={style.formTitle}>This is a To-Deux Modal</h1>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>

          <label htmlFor="status">
            Status
            <SelectButton
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </SelectButton>
          </label>

          <div className={style.buttonContainer}>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Add Task
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToDoModal;
