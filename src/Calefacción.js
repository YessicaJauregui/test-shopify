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
            {value: 'ManguerasCalefaccion', label: 'Mangueras de Calefacción'},
            {value: 'MotorCalefaccion', label: 'Motor Calefacción'},
            {value: 'RadiadorCalefaccion', label: 'Radiador de Calefacción'},
            {value: 'ValvulaCalefaccion', label: 'Válcula Calefacción'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
