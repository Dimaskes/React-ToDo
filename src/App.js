import React from 'react';
import listSvg from './assets/img/list.svg'

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <ul className="todo__list">
          <li className="active">
            <i>
              <img src={listSvg} alt='List icon'/>
            </i>
            <span>Все задачи</span>
          </li>
        </ul>
        
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
