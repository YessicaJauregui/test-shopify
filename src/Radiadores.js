import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import ForoCalaveras from './ForoCalaveras';


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
            {value: 'Anticongelantes', label: 'Anticongelantes'},
            {value: 'BulboTemperatura', label: 'Bulbo de Temperatura'},
            {value: 'DepositoAnticongelante', label: 'Depósito de Anticongelante'},
            {value: 'MangueraRadiador', label: 'Manguera de Radiador'},
            {value: 'RadiadoresAceite', label: 'Radiadores de Aceite'},
            {value: 'RadiadoresAgua', label: 'Radiadores de Agua'},
            {value: 'RadiadoresIntercooler', label: 'Radiadores de Intercooler'},
            {value: 'TapaRadiador', label: 'Tapa de Radiador'},
            {value: 'Termostato', label: 'Termostato'},
            {value: 'TolvasRadiador', label: 'Tolvas de Radiador'},
            {value: 'TolvasAgua', label: 'Tolvas de Agua'},
            {value: 'Otras', label: 'Otras '},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
