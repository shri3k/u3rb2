import React from 'react';

import ListBoxComponent from '../components/ListBoxComponent';

var ListBox = React.createClass({
  getInitialState: function() {
    return {
      list: this.props.store.getState().todo.todos.length ? this.props.store.getState().todo.todos : ['waiting..']
    }
  },
  componentDidMount: function() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.state.list = this.props.store.getState().todo.todos;
      this.forceUpdate();
    });
  },
  render: function() {
    return (<ListBoxComponent list={this.state.list} />);
  }
});

export
default ListBox;
