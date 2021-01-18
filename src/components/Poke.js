import React from 'react';

export default function Poke(props) {
  return (
    <div className="pokemon">
      <img
        draggable="true"
        src={props.ava}
        alt="char"
      />
    </div>
  );
}
