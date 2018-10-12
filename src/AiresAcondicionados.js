import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import NavegadoresAutos from '/NavegadoresAutos.js';
import NavegadoresPortatiles from './NavegadoresPortatiles.js';

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
            {value: 'BolerosCompresor', label: 'Boleros de Compresor'},
            {value: 'BobinaCompresor', label: 'Bobina Compresor'},
            {value: 'Condensador', label: 'Condensador'},
            {value: 'Compresor', label: 'Compresor'},
            {value: 'EquiposCompletos', label: 'Equipos Completos'},
            {value: 'FiltroAcumulador', label: 'FiltroAcumulador'},
            {value: 'InterruptorPresion', label: 'Interruptor de Presión'},
            {value: 'JuntasCompresor', label: 'Juntas para Compresor'},
            {value: 'Mangueras', label: 'Mangueras'},
            {value: 'PanelEvaporador', label: 'Panel Evaporador'},
            {value: 'AwitchAire', label: 'Switch de Aire Acondicionado'},
            {value: 'ValvulasExpansion', label: 'Válvulas de Expansión'},
            {value: 'ValvulasElectronicas', label: 'Válvulas Electrónicas'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
