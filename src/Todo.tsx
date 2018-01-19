import * as React from 'react';

export interface TodoProps {
  title: string;
  completed: boolean;
  important: boolean;
}

interface Props {
  todo: TodoProps;
  clicked(todo: TodoProps): void;
}

export class Todo extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e: React.MouseEvent<HTMLLIElement>) {
    this.props.clicked(this.props.todo);
  }
  render() {
    const { todo: { title, completed } } = this.props;
    console.log(completed);
    return (
      <li className={'ListItem ' + (completed ? 'Finished' : '')} onClick={this.handleClick} >
        {title} {completed}
      </li>
    );
  }
}
