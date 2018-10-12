import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';

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
            {value: 'Cajas', label: 'Cajas'},
            {value: 'Fundas', label: 'Fundas'},
            {value: 'Rampas', label: 'Rampas'},
            {value: 'Ropa', label: 'Ropa'},
            {value: 'Winch', label: 'Winch'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
