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
            {value: 'Adultos', label: 'Adultos'},
            {value: 'BoletosEventos', label: 'Boletos para Eventos'},
            {value: 'Criptomonedas', label: 'Criptomonedas'},
            {value: 'Esoterismo', label: 'Esoterismo'},
            {value: 'KitsCriminalistica', label: 'Kits de Criminalística'},
            {value: 'Mercería', label: 'Mercería'},
            {value: 'SegurosViaje', label: 'Seguros de Viaje'},
            {value: 'Tarjetas de Regalo', label: 'Tarjetas de Regalo'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
