import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import Todos from './Todos';
import { TodoProps } from './Todo';
import { State, Action } from './AppReducer';
import './App.css';

const logo = require('./logo.svg');

interface Props {
  todos: TodoProps[];
  dispatch(action: Action): void;
}

const App: React.SFC<Props> = props => {
  let { todos, dispatch } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React and TypeScript</h1>
      </header>
      <div className="App-intro">
        <Todos name="My Todo" todos={todos} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default connect(
  (state: State) => {
    return { todos: state.todos } as Props;
  },
  (dispatch: Dispatch<Action>) => {
    return { dispatch } as Props;
  }
)(App);
