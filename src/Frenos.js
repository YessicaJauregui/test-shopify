import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import Filtros from './Filtros.js';


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
            {value: 'Balatas', label: 'Balatas'},
            {value: 'BalatasTambor', label: 'Balatas de Tambor'},
            {value: 'BombasFreno', label: 'Bombas de Freno'},
            {value: 'Booster', label: 'Booster'},
            {value: 'Calipers', label: 'Calipers'},
            {value: 'CilindrosFreno', label: 'Cilindros de Freno'},
            {value: 'DepositoLiquido', label: 'Depósito Liquido de Frenos'},
            {value: 'DiscosFrenos', label: 'Discos de Freno'},
            {value: 'ManguerasFreno', label: 'Mangueras de Freno'},
            {value: 'PalancasFreno', label: 'Palancas de Freno de Mano'},
            {value: 'PinzasDiscos', label: 'Pinzas de Discos de Freno'},
            {value: 'SensorABS', label: 'Sensor ABS'},
            {value: 'SensorStop', label: 'Sensor de Stop'},
            {value: 'SensorPastillas', label: 'Sensor Pastillas de Freno'},
            {value: 'SistemaFrenado', label: 'Sistema de Frenado'},
            {value: 'Tambores', label: 'Tambores'},
            {value: 'ZapatasFreno', label: 'Zapatas de Freno'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
