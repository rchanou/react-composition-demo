import React from 'react';
import Toggle from 'react-toggle';
import './css/toggle-style.css';

export default class App extends React.Component {
  render() {
    return <div>
      <h1>Hello, Joe.</h1>
      <Toggle
      />
    </div>;
  }
}
