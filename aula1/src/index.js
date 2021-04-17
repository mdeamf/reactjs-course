import React from 'react';
import { render } from 'react-dom';
import Button from './components/Button';

class App extends React.Component {
  state = {
    contador: 0,
    name: ''
  };

  constructor(props) {
    super(props);
    console.log('constructor', props);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  changeText = (e) => {
    this.setState({
      nome: e.target.value
    })
  }

  adicionar = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  render() {
    console.log('render');

    return (
      <div>
        <h1>Hello React!!</h1>

        <div>
          <input onChange={this.changeText} />
        </div>

        <div>
        contador: {this.state.contador}
        <Button title="teste" descricao="asdf asdf" press={this.adicionar}>
          Update
        </Button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
