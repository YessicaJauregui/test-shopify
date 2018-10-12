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
            {value: 'Filtros', label: 'Filtros'},
            {value: 'KitsFiltros', label: 'Kits de Filtros'},
            {value: 'PortaFiltros', label: 'PortaFiltros'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
