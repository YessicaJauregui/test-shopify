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
            {value: 'AccesoriosGamers', label: 'Accesorios Gamers'},
            {value: 'Atari', label: 'Atari'},
            {value: 'FigurasIteractivas', label: 'Figuras Interactivas'},
            {value: 'Maquinitas', label: 'Maquinitas'},
            {value: 'Nintendo', label: 'Nintendo'},
            {value: 'Playstation', label: 'Playstation'},
            {value: 'Sega', label: 'Sega'},
            {value: 'Videojuegos', label: 'Videojuegos'},
            {value: 'Xbox', label: 'Xbox'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
