import React from 'react';
import {connect} from 'react-redux';

import ListBox from './ListBox';
import InputBarComponent from '../components/InputBarComponent';

function mapDispatchToProps(dispatch){
  return {
    addTodo: function(value){
      dispatch({
        type: 'ADD',
        data: value
      });
    }
  };
}

const Input = connect(null, mapDispatchToProps)(InputBarComponent);

const App = ()=>{
  return (
    <div>
      <Input/>
      <ListBox/>
    </div>
  )
};

export default App;
