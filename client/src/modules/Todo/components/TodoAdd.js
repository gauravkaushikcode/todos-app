import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todoActions';

class TodoAdd extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    var txtOption = e.target.elements.option;
    var optionText = txtOption.value.trim();

    if (optionText) {
      this.props.addTodo(optionText);
      txtOption.value = '';
    }
  }

  render() {
    return (
      <div className="panel-body">
        <form className="form-horizontal" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder="Task to do"
              name="option"
              autoComplete="off"
            />
            <span className="input-group-btn">
              <button className="btn btn-primary">Add</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  addTodo
})(TodoAdd);
