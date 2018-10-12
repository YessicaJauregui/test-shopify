import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import AccesoriosBateas from './AccesoriosBateas.js';
import AccesoriosBurreras from './AccesoriosBurreras.js';
import AccesoriosDeflectores from './AccesoriosDeflectores.js';

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
            {value: 'DeflectoresCofre', label: 'Delfectores de Cofre'},
            {value: 'DeflectoresVentana', label: 'Deflectores de Ventana'},
            {value: 'OtrosDeflectores', label: 'Otros Deflectores'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
