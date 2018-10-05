import React from 'react';
import {TextField} from '@shopify/polaris';

export default class PlaceholderExample extends React.Component {
  state = {
    value: '',
  };

  handleChange = (value) => {
    this.setState({value});
  };

  render() {
    return (
      <div style={{width:'200px'}}>
      <TextField

        value={this.state.value}
        onChange={this.handleChange}
        placeholder="Tu link en Shopify"
      />
      </div>
    );
  }
}
