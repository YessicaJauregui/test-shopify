import React from 'react';
import {TextField} from '@shopify/polaris';

export default class TextFieldExample extends React.Component {
  state = {
    value: '',
  };

  handleChange = (value) => {
    this.setState({value});
  };

  render() {
    return (
      <TextField
        label="Smartphone Samsung Galaxy S8 64GB Dorado Maple Desbloqueado"
        value={this.state.value}
        onChange={this.handleChange}
        
      />
    );
  }
}
