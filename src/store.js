import React from 'react';
import { projects } from './data';

const Context = React.createContext();

class Provider extends React.Component {
  state = {
    projects: projects
  };
  render() {
    return (
      <Context.Provider value={{ ...this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
