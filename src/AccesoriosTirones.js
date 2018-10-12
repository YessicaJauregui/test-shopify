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
            {value: 'BolsaRemolques', label: 'Barras Para Remolques'},
            {value: 'CoplesRemolques', label: 'Coples para Remolques'},
            {value: 'Eslinga', label: 'Eslinga'},
            {value: 'TironesCompletos', label: 'Tirones Completos'},
            {value: 'TironesAluminio', label: 'Tirones de Aluminio'},
            {value: 'TironesTela', label: 'Tirones de Tela'},
            {value: 'Otras', label: 'Otras '},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
