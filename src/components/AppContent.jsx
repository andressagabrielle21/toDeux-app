import React from 'react';
import style from '../styles/modules/app.module.scss';

function AppContent({ children }) {
  return (
    <div className={style.content__wrapper}>
      AppContent
      {children}
    </div>
  );
}

export default AppContent;
