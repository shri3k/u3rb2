import React, {PropTypes} from 'react';
let Counter = (props)=>{
  var todos = props.todos || [];
  return (<div>
    <input type="text" placeholder="Add todo"/>
    <input type="submit" value="Add" onSubmit={addToList}/>
    <div>
      <ul>
        {todos.map((todo)=>{
          return (<li> todo.text </li>);
        })}
      </ul>
    </div>
  </div>);
};

Counter.propTypes = {
  addTodoList: PropTypes.func.isRequired
};

export default Counter;
