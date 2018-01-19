import { TodoProps } from './Todo';

export type State = {
  readonly todos: TodoProps[];
};

interface TodoAction {
  todo: TodoProps;
  type: string;
  reason: string;
}
interface SearchAction {
  type: string;
  query: string;
}

export type Action = TodoAction | SearchAction;

const initialState: State = {
  todos: [
    { title: 'Eat Lunch', completed: false, important: false },
    { title: 'Teach TypeScript', completed: false, important: true },
    { title: 'Perform Review', completed: false, important: true },
    { title: 'Show off Elm', completed: false, important: false }
  ]
};

const AppReducer = (state: State = initialState, action: Action) => {
  console.group('Action Received');
  // console.log(`State:`, state);
  // console.log(`Action:`, action);

  let newState = state;
  switch (action.type) {
    case 'TODO_CLICKED':
      newState = JSON.parse(JSON.stringify(state));
      newState.todos.forEach((item) => {
        if (item.title === (action as TodoAction).todo.title)
        {
          switch ((action as TodoAction).reason)
          {
            case 'complete':
              item.completed = ! item.completed;
              break;
            case 'important':
              item.important = ! item.important;
              break;
            default:
              break;
          }
        }
      });
      break;
    default:
      console.warn('I was not handled 😢');
      break;
  }
  console.groupEnd();
  return newState;
};
export default AppReducer;
