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
            {value: 'BolsasAire', label: 'Bolsas de Aire'},
            {value: 'BotadoresSeguros', label: 'Botadores de Seguros'},
            {value: 'CinturonesSeguridad', label: 'Cinturones de Seguridad'},
            {value: 'ModulosBolsas', label: 'Módulos de Bolsas de Aire'},
            {value: 'OtrosComponentes', label: 'Otros Componentes'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
