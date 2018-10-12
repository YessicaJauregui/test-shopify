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
            {value: 'Bodegas', label: 'Bodegas'},
            {value: 'Casas', label: 'Equipamiento para Industrias'},
            {value: 'Cuartos', label: 'Cuartos'},
            {value: 'Departamentos', label: 'Departamentos'},
            {value: 'Edificios', label: 'Edificios'},
            {value: 'Haciendas', label: 'Haciendas'},
            {value: 'LocalesComerciales', label: 'Locales Comerciales'},
            {value: 'Oficinas', label: 'Oficinas'},
            {value: 'Ranchos', label: 'Ranchos'},
            {value: 'Terrenos', label: 'Terrenos'},
            {value: 'OtrosInmuebles', label: 'Otros Inmuebles'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
