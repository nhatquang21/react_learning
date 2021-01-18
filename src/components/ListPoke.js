import React from 'react';
import Poke from './Poke';

export default function ListPoke(props) {
  return (
    <div>
      <div className="pokemon__list container">
        <div className="display__pokemon">
          {props.display.map((item, index) => {
            return (item !== 0 ) ? <Poke key={index} ava={props.poke[index].avatar} /> : null;
          })}

          <Poke />
        </div>
      </div>
    </div>
  );
}
