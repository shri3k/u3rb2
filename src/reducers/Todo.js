import fun from 'funcy';

function todo(state = {todos:[]}, action) {
  var $ = fun.parameter;
  var reducer = fun(
    ['ADD', () => Object.assign({}, state, {todos:[...state.todos, action.data]})],
    [$, () => state]
  );
  return reducer(action && action.type);
}

export default todo;
