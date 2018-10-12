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
            {value: 'Cigarros', label: 'Cigarros y Afines'},
            {value: 'Coleccionables', label: 'Coleccionables de Deportes'},
            {value: 'Comics', label: 'Comics'},
            {value: 'FigurasAccion', label: 'Figuras de Acción'},
            {value: 'Filatelia', label: 'Filatelia'},
            {value: 'Manga', label: 'Manga'},
            {value: 'Militaria y Afines', label: 'Militaria y Afines'},
            {value: 'Modelismo', label: 'Modelismo'},
            {value: 'Monedas', label: 'Monedas y Billetes'},
            {value: 'Muñecas', label: 'Muñecas y Accesorios'},
            {value: 'Posters', label: 'Posters,Carteles y Lonas'},
            {value: 'Militaria y Afines', label: 'Militaria y Afines'},
            {value: 'RPG', label: 'R.P.G.'},
            {value: 'StarWars', label: 'Star Wars'},
            {value: 'TarjetasTelefonicas', label: 'Tarjetas Telefónicas'},
            {value: 'Tazos', label: 'Tazos'},
            {value: 'VehículosMiniatura', label: 'Vehículos en Miniatura'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
