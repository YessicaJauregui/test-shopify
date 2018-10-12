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
            {value: 'FiltrosAceite', label: 'Filtros de Aceite'},
            {value: 'FiltrosAire', label: 'Filtros de Aire'},
            {value: 'FiltrosCabina', label: 'Filtros de Cabina'},
            {value: 'FiltrosGasolina', label: 'Filtros de Gasolina'},
            {value: 'OtrosFiltros', label: 'Otros Filtros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
