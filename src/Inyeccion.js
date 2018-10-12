import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import ForoCalaveras from './ForoCalaveras';
import Sensores from './Sensores.js';

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
            {value: 'Caudalimetro', label: 'Caudalimetro'},
            {value: 'Computadoras', label: 'Computadoras'},
            {value: 'CuerpoAceleracion', label: 'Cuerpo de Aceleración'},
            {value: 'Inyectores', label: 'Inyectores'},
            {value: 'ReguladoresPresión', label: 'Reguladores de Presión'},
            {value: 'RielInyectores', label: 'Riel de Inyectores'},
            {value: 'Sensores', label: 'Sensores'},
            {value: 'ValvuladaEGR', label: 'Válvula EGR'},
            {value: 'ValvulaLAC', label: 'Válvula LAC'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
