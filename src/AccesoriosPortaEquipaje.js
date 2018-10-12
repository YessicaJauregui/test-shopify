import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';

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
            {value: 'BarrasPorta', label: 'Barras Porta Equipajes'},
            {value: 'BolsasPorta', label: 'Bolsas Porta Equipajes'},
            {value: 'CajasPorta', label: 'Cajas Porta Equipaje'},
            {value: 'CanastillasPorta', label: 'Canastillas Porta Equipajes'},
            {value: 'PortaBici', label: 'Porta Bicicletas'},
            {value: 'Otras', label: 'Otras '},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
