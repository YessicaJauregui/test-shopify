import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import ForoCalaveras from './ForoCalaveras';
import Aceite from './Aceite.js';
import Bombas from './Bombas.js';
import ComponentesMotor from './ComponentesMotor.js';

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
            {value: 'AnillosMotor', label: 'Anillos de Motor'},
            {value: 'ArbolesLevas', label: 'Árboles de Levas'},
            {value: 'Balacines', label: 'Balacines'},
            {value: 'Bielas', label: 'Bielas'},
            {value: 'CabezasMotor', label: 'Cabezas de Motor'},
            {value: 'Cigueñales', label: 'Cigueñales'},
            {value: 'CojinetesMotor', label: 'Cojinetes de Motor'},
            {value: 'Engranes', label: 'Engranes'},
            {value: 'ManguerasAdmision', label: 'Mangueras de Admisión'},
            {value: 'Monoblock', label: 'Monoblock'},
            {value: 'Pistones', label: 'Pistones'},
            {value: 'PunteriaHidraulica', label: 'Punterías Hidráulicas'},
            {value: 'ResortesValvulas', label: 'Resortes de Válvulas'},
            {value: 'TapasPunterias', label: 'Tapas de Punterías'},
            {value: 'Tornillos', label: 'Tornillos'},
            {value: 'TornillosCabezaMotor', label: 'Tornillos de Cabeza de Motor'},
            {value: 'Válvulas', label: 'Válvulas'},
            {value: 'OtrosComponentesMotor', label: 'Otros Componentes de Motor'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
