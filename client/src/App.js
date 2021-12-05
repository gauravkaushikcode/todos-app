import React from 'react';

import Todo from './modules/Todo/components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <Todo />
          </div>
        </div>
      </div>
    );
  }
}
