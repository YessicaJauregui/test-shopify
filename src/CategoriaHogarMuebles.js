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
            {value: 'Baño', label: 'Baño'},
            {value: 'Cocina', label: 'Cocina'},
            {value: 'Comedor', label: 'Comedor'},
            {value: 'CuidadoHogar', label: 'Cuidado del Hogar y Lavanderia'},
            {value: 'Decoracion', label: 'Decoración'},
            {value: 'Iluminacion', label: 'Iluminacion para el Hogar'},
            {value: 'Jardín y Exterior', label: 'Jardín y Exterior'},
            {value: 'Lavadero', label: 'Lavadero'},
            {value: 'MueblesSalas', label: 'Muebles para Salas'},
            {value: 'Recamara', label: 'Recámara'},
            {value: 'SeguridadHogar', label: 'Seguridad para el Hogar'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
