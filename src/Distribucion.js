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
            {value: 'BandaDistribucion', label: 'Banda de Distribución'},
            {value: 'CadenaDistrbucion', label: 'Cadena de Distribución'},
            {value: 'EngranesArbol', label: 'Engranes de Árbol de Levas'},
            {value: 'EngranesCigueñal', label: 'Engranes de Ciguenal'},
            {value: 'EngranesDistribucion', label: 'Engranes de Distribución'},
            {value: 'KitDistribucion', label: 'Kit de Distribución'},
            {value: 'OtrasDistribucion', label: 'Otras Partes de Distribucion'},
            {value: 'PoleaDistribucion', label: 'Polea de Distribución'},
            {value: 'TapaDistribucion', label: 'Tapa de Distribución'},
            {value: 'Otros', label: 'Otros'},
          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
