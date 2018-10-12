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
            {value: 'Botargas', label: 'Botargas'},
            {value: 'Cotillon', label: 'Cotillón'},
            {value: 'DecoracionFiesta', label: 'Decoración para Fiestas'},
            {value: 'Disfraces', label: 'Disfraces'},
            {value: 'Invitaciones', label: 'Invitaciones'},
            {value: 'Kits', label: 'Kits Imprimibles'},
            {value: 'Mascaras', label: 'Máscaras'},
            {value: 'MesaDulces', label: 'Mesa de Dulces y Repostería'},
            {value: 'Musica', label: 'Música'},
            {value: 'Props', label: 'Props para Photo Booth'},
            {value: 'Recuerdos', label: 'Recuerdos'},
            {value: 'Tarjetas', label: 'Tarjetas'},
            {value: 'VajillaFiestas', label: 'Vajilla para Fiestas'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
