import React from 'react';

var InputBar = React.createClass({
  add: function(e){
    e.preventDefault();
    this.props.addTodo(this.todoInput.value);
  },
  render: function(){
    return (
      <div id="search">
        <form onSubmit={this.add}>
          <input type="text" placeholder="Add" ref={ (ref)=> {this.todoInput = ref } } />
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
});

export default InputBar;
