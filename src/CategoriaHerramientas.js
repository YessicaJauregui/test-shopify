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
            {value: 'ComElec', label: 'Componentes Electrónicos'},
            {value: 'Construccion', label: 'Construcción'},
            {value: 'Herrramientas', label: 'Herramientas'},
            {value: 'MobiliarioBaños', label: 'Mobiliario para Baños'},
            {value: 'MueblesCocina', label: 'Muebles para Cocina'},
            {value: 'PisoParedes', label: 'Pisos Paredes y Aberturas'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
