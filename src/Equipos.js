import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import NavegadoresAutos from '/NavegadoresAutos.js';
import NavegadoresPortatiles from './NavegadoresPortatiles.js';

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
            {value: 'NavegadoresMarinos', label: 'Navegadores Marinos'},
            {value: 'NavegadoresAutos', label: 'Navegadores para Autos'},
            {value: 'NavegadoresPortatiles', label: 'Navegadores Portátiles'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
