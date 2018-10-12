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
            {value: 'Antiguedades', label: 'Antiguedades'},
            {value: 'Arte', label: 'Arte'},
            {value: 'Artesanías', label: 'Artesanías'},
            {value: 'Tatuajes', label: 'Insumos para Tatuajes'},
            {value: 'Libro', label: 'Libros de Animales'},
            {value: 'Otros', label: 'Otros'},
          
          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
