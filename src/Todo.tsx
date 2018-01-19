import * as React from 'react';

export interface TodoProps {
  title: string;
  completed: boolean;
  important: boolean;
}

interface Props {
  todo: TodoProps;
  clicked(todo: TodoProps, reason: string): void;
}

export class Todo extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleOtherClick = this.handleOtherClick.bind(this);
  }
  handleClick(e: React.MouseEvent<HTMLLIElement>) {
    this.props.clicked(this.props.todo, 'complete');
  }
  handleOtherClick(e: React.MouseEvent<HTMLInputElement>) {
    this.props.clicked(this.props.todo, 'important');
  }
  render() {
    const { todo: { title, completed, important } } = this.props;
    console.log(completed);
    return (
      <li className={'ListItem ' + (completed ? 'Finished' : '')} onClick={this.handleClick} >
        <input type="checkbox" onClick={this.handleOtherClick}/>
        {title} {important ? 'Important!' : ''}
      </li>
    );
  }
}
