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
            {value: 'CerraduraCajuela', label: 'Cerraduras de Cajuela'},
            {value: 'CerradurasCofre', label: 'Cerraduras de Cofre'},
            {value: 'CerradurasPuerta', label: 'Cerraduras de Puerta'},
            {value: 'CilindrosArranque', label: 'Cilindros de Arranque'},
            {value: 'LlavesArranque', label: 'Llaves de Arranque'},
            {value: 'LlavesTelecomando', label: 'Llaves Telecomando'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
