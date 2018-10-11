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
            {value: 'Mensajeria', label: 'Mensaje y Paquetería'},
            {value: 'Mudanzas', label: 'Mudanzas y Fletes'},
            {value: 'Pasajeros', label: 'Pasajeros'},
            {value: 'Remolques', label: 'Remolques'},
            {value: 'Otros', label: 'Otros'},
            {value: '', label: ''},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
