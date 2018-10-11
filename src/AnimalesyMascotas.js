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
            {value: 'Aves', label: 'Aves'},
            {value: 'Conejos', label: 'Conejos'},
            {value: 'Equinos', label: 'Equinos'},
            {value: 'Gatos', label: 'Gatos'},
            {value: 'Libro', label: 'Libros de Animales'},
            {value: 'Peces', label: 'Peces'},
            {value: 'Perros', label: 'Perros'},
            {value: 'Reptiles', label: 'Reptiles y Anfibios'},
            {value: 'Otros', label: 'Otros'},
          


          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
