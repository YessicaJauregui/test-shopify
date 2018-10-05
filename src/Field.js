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
        label=""
         placeholder="🔍        Titulo  "
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}
