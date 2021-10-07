import './App.css';
import React from 'react';


class AppClass extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>{this.props.nome}</h1>
          <h2>{this.props.idade}</h2>
        </header>
        <main>
          <p>Teste</p>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </main>
      </>
    );
  }
}

export default AppClass;
