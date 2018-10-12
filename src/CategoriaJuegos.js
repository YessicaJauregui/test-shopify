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
            {value: 'BrincolinesAlbercasPlaza', label: 'Brincolines,Albercas y Plaza'},
            {value: 'Juegos', label: 'Juegos'},
            {value: 'Juegos de Contrucción', label: 'Juegos de Contrucción'},
            {value: 'Juguetes', label: 'Juguetes'},
            {value: 'Modelismo', label: 'Modelismo'},
            {value: 'Muñecos', label: 'Muñecos'},
            {value: 'Smar Wars', label: 'Smar Wars'},
            {value: 'Muñecos', label: 'Muñecos'},
            {value: 'Smar Wars', label: 'Smar Wars'},
            {value: 'VehículosMiniatura', label: 'Vehículos de Miniatura'},
            {value: 'VehiculosNiños', label: 'Vehículos para Niños'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
