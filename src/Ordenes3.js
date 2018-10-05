import React from 'react';
import {Checkbox} from '@shopify/polaris';

export default class CheckboxExample extends React.Component {
  state = {
    checked: false
  };

  render() {
    const { checked } = this.state;

    return <Checkbox checked={checked} label="Basic checkbox" onChange={this.handleChange} labelHidden={true} />;
  }

  handleChange = value => {
    this.setState({ checked: value });
  };
}
