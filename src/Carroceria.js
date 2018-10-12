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
            {value: 'AlmaDefensa', label: 'Alma Defensa'},
            {value: 'AmortiguadoresCajuela', label: 'Amortiguadores de Cajuela'},
            {value: 'Bisagras', label: 'Bisagras'},
            {value: 'ChapasPlaticos', label: 'Chapas y Plásticos y Exterior'},
            {value: 'ManijasAutomoviles', label: 'Manijas de Automóviles'},
            {value: 'MarcosRadiador', label: 'Marcos de Radiador'},
            {value: 'PanelPuerta', label: 'Panel de Puerta'},
            {value: 'TanqueGasolina', label: 'Tanque de Gasolina'},
            {value: 'TapaCaja', label: 'Tapa de Caja'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
