/* import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static defaultProps = {
    title: 'Comportamento Padrão',
    descricao: 'Descrição Padrão'
  };

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        {this.props.title} - {this.props.descricao}
        <br />
        <button onClick={this.props.press}>{this.props.children}</button>
      </div>
    );
  }
} */

import React from 'react';

const Button = (props) => {
  return (
    <div>
      {props.title} - {props.descricao}
      <br />
      <button onClick={props.press}>{props.children}</button>
    </div>
  );
};

export default Button;
