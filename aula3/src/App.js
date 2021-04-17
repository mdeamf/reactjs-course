import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
  state = {
    personagens: []
  };

  async componentWillMount() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const dataJSON = await response.json();
      this.setState({
        personagens: dataJSON.results
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        {this.state.personagens.map((personagem) => {
          return (
            <div key={personagem.name}>
              <Link to="/personagem/1">{personagem.name}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
