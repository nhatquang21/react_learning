import React from 'react';
import Poke from './Poke';
export default function PokeType(props) {
  console.log(props)
  return (
    <div>
      <div className="pokemon__type container">
        <div className="row">
          <div className="col-4">
            <div className="type__A">A</div>
            <div className="type__box">
              {props.poke.map((item,index) => {
                return (item.type== 'fire') ? <Poke key={index} ava={item.avatar} /> : null
              })}
            </div>
          </div>
          <div className="col-4">
            <div className="type__B">B</div>
            <div className="type__box">
            {props.poke.map((item,index) => {
                return (item.type== 'water') ? <Poke key={index} ava={item.avatar} /> : null
              })}
            </div>
          </div>
          <div className="col-4">
            <div className="type__C">C</div>
            <div className="type__box">
            {props.poke.map((item,index) => {
                return (item.type== 'grass') ? <Poke key={index} ava={item.avatar} /> : null
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
