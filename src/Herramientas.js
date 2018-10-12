import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import Llantas from './Llantas.js';

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
            {value: 'Abrasivos', label: 'Abrasivos'},
            {value: 'Adhesivos', label: 'Adhesivos'},
            {value: 'Balanceadores', label: 'Balanceadores de Ruedas'},
            {value: 'CablesCorriente', label: 'Cables Pasa Corriente'},
            {value: 'CajasHerramientas', label: 'Cajas de Herramientas'},
            {value: 'CamasMecanicos', label: 'Camas para Mecánicos'},
            {value: 'Cargadores', label: 'Cargadores y Baterías'},
            {value: 'CompresoresAire', label: 'Compresores de Aire'},
            {value: 'Gatos', label: 'Gatos'},
            {value: 'Hojalateria', label: 'Hojalateria'},
            {value: 'Interfaces', label: 'Interfaces'},
            {value: 'Llaves', label: 'Llaves'},
            {value: 'MedidoresPresion', label: 'Medidores Presión de Llantas'},
            {value: 'PistolasPinturas', label: 'Pistolas para Pinturas'},
            {value: 'Probadores', label: 'Probadores'},
            {value: 'Scanners', label: 'Scanners'},
            {value: 'Separadores', label: 'Separadores de Baleros'},
            {value: 'TinasUltrasonido', label: 'Tinas Ultrasonido'},
            {value: 'Torres', label: 'Torres para Autos'},
            {value: 'Otras', label: 'Otras'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
