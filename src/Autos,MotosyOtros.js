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
            {value: 'Coleccion', label: 'Autos de Colección'},
            {value: 'CamionetasAutos', label: 'Autos y Camionetas'},
            {value: 'Camiones', label: 'Camiones'},
            {value: 'Nautica', label: 'Motos'},
            {value: 'Pesados', label: 'Vehiculos Pesados'},
            {value: 'OtrosBehiculos', label: 'Otros Vehículos'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
