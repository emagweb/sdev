import React from 'react'

function Title(props) {
  return (
    <div className="section-title">
      <h3 className={props.type}>{props.text}</h3>
    </div>
  );
}

export default Title