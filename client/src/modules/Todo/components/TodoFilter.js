import React from 'react';
import TodoFilterLink from './TodoFilterLink';
import {
  TODO_FILTER_ALL,
  TODO_FILTER_ACTIVE,
  TODO_FILTER_COMPLETED
} from '../actions/todoActionTypes';

class TodoFilter extends React.Component {
  render() {
    return (
      <div className="panel-footer small">
        Show:
        <TodoFilterLink type={TODO_FILTER_ALL}>All</TodoFilterLink>
        <TodoFilterLink type={TODO_FILTER_ACTIVE}>Pending</TodoFilterLink>
        <TodoFilterLink type={TODO_FILTER_COMPLETED}>Completed</TodoFilterLink>
      </div>
    );
  }
}

export default TodoFilter;
