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
            {value: 'ArtefactosHogar', label: 'Artefactos para el Hogar'},
            {value: 'Climatizacion', label: 'CLimatización'},
            {value: 'Coccion', label: 'Cocción'},
            {value: 'ElectrodomesticosCocina', label: 'Electrodomésticos de Cocina'},
            {value: 'SecadoRopa', label: 'Lavado y Secado de Ropa'},
            {value: 'Lavabajillas', label: 'Lavabajillas'},
            {value: 'Refrigeracion', label: 'Refrigeración'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
