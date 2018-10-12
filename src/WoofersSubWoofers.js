import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import Bocinas from './Bocinas.js';


export default class OptionListExample extends React.Component {
  state = {selected: []};

  render() {
    return (
      <Card>
        <OptionList
          title=""
          onChange={(updated) => {
            this.setState({selected: updated});
          }}
          options={[
            {value: 'Bocinas1', label: 'SubWoofers'},
            {value: 'Bocinas2', label: 'Woofers'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
