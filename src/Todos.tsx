import * as React from 'react';
import { Todo, TodoProps } from './Todo';
import { Action } from './AppReducer';

interface Props {
  name: string;
  todos: TodoProps[];
  dispatch(action: Action): void;
}

interface State {
  search: string;
}

const hash = (val: string): number => {
  return val.split('').reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};

export default class Todos extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <ul className="List">
          {this.props.todos.map((todo: TodoProps, idx: number) => (
            <Todo
              key={hash(todo.title)}
              todo={todo}
              clicked={(t: TodoProps, reason: string) => {
                this.props.dispatch({
                  todo: t,
                  type: 'TODO_CLICKED',
                  reason
                } as Action);
              }}
            />
          ))}
        </ul>
      </div>
    );
  }
}
