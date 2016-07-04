import React from 'react';

import InputBar from '../components/InputBar';
import ListBox from './ListBox';

var InputBarCont = React.createClass({
  componentDidMount: function(){
    this.store = this.props.route.store;
    this.unsubscribe = this.store.subscribe(()=>{
      console.log(this.store.getState());
      this.forceUpdate();
    });
  },
  componentWillUnMount: function(){
    this.unsubscribe();
  },
  addTodo: function(value){
    this.store.dispatch({
      type: 'ADD',
      data: value 
    });
  },
  render:function(){
    return (
      <div>
        <InputBar addTodo={this.addTodo} />
        <ListBox store={this.props.route.store}/>
      </div>);
  }
});

export default InputBarCont;

