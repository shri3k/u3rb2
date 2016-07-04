import React from 'react';

var ListBoxComponent = (props) => {
  var comp = (<ul>
    {props.list && props.list.map((li, index)=>(<li key={index}>{li}</li>))}
  </ul>);
  return comp;
};

export default ListBoxComponent;
