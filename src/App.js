import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [coworkers, setCoworkers] = useState([
    {
      first_name: 'Max',
      last_name: 'Mustermann',
      status: 'in office',
    },
    { first_name: 'Vladimir', last_name: 'Leles', status: 'out of office' },
    { first_name: 'Tobias', last_name: 'Anhalt', status: 'out of office' },
  ]);

  const changeStatus = (event) => {};
  return (
    <div>
      {coworkers.map((coworker) => {
        return (
          <li>
            {`${coworker.first_name}  ${coworker.last_name}`}
            <button
              onClick={() => {
                changeStatus(coworker);
              }}
            >
              {coworker.status}
            </button>
          </li>
        );
      })}
    </div>
  );
}
