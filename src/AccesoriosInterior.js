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
            {value: 'AccesoriosBateas', label: 'Carcadas para Controles'},
            {value: 'CubreVestiduras', label: 'Cubre Asientos y Vestiduras'},
            {value: 'CubreVolantes', label: 'Cubre Volantes'},
            {value: 'Encendedores', label: 'Encendedores'},
            {value: 'Palancas', label: 'Palancas'},
            {value: 'Parasoles', label: 'Parasoles'},
            {value: 'Pedales', label: 'Pedales'},
            {value: 'PerillasVolante', label: 'Perillas para Volante'},
            {value: 'Portavasos', label: 'Portavasos'},
            {value: 'TacómetrosVelocimetros', label: 'Tacómetros y VelocÍmetros'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
