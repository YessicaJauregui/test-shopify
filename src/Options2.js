import React from 'react';
import {Select} from '@shopify/polaris';

export default class SelectExample extends React.Component {
  state = {
    selected: 'today',
  };

  handleChange = (newValue) => {
    this.setState({selected: newValue});
  };

  render() {
    const options = [
      {label: 'Gratis', value: 'today'},
      {label: 'Clasica', value: 'yesterday'},
      {label: 'Premium', value: 'lastWeek'},
    ];

    return (
      <Select
        label=""
        options={options}
        onChange={this.handleChange}
        value={this.state.selected}
      />
    );
  }
}
