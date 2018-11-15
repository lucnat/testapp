
import React from 'react';

import MenuBar from './MenuBar';
import Todos from './Todos';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <MenuBar />
        <Todos />
      </div>
    );
  }

}
