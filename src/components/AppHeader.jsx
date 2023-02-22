import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import style from '../styles/modules/app.module.scss';
import ToDoModal from './ToDoModal';

function AppHeader() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={style.appHeader}>
      <Button
        onClick={() => {
          setOpenModal(true);
        }}
        type="submit"
        variant="primary"
      >
        Add new task
      </Button>
      <SelectButton id="status" name="status">
        <option value="all">All</option>
        <option value="imcomplete">Imcomplete</option>
        <option value="completed">Completed</option>
      </SelectButton>

      {openModal && <ToDoModal setOpenModal={setOpenModal} />}
    </div>
  );
}

export default AppHeader;
