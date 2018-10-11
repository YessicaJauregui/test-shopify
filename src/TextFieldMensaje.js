import React from 'react';
import {TextField} from '@shopify/polaris';

export default class MultilineFieldExample extends React.Component {
  state = {
    value: '\n\n\n',
  };

  handleChange = (value) => {
    this.setState({value});
  };

  render() {
    return (
      <TextField
        label=""
        value={this.state.value}
        onChange={this.handleChange}
        multiline
      />
    );
  }
}
