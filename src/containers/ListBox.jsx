import React from 'react';

import {connect} from 'react-redux';

import ListBoxComponent from '../components/ListBoxComponent';

function mapStateToProps(state){
  return{
    list: state.todo.todos
  };
}

const ListBox = connect(mapStateToProps, null)(ListBoxComponent); 


export default ListBox;
