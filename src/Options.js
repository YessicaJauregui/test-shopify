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
      {label: 'Activa', value: 'today'},
      {label: 'Pausada', value: 'yesterday'},
      {label: 'Finalizada', value: 'lastWeek'},
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
