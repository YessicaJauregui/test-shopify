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
            {value: 'Equipamiento Comercial', label: 'Equipamiento Comercial'},
            {value: 'EquipamientoIndustrias', label: 'Equipamiento para Industrias'},
            {value: 'Equipamiento para Oficinas', label: 'Equipamiento para Oficinas'},
            {value: 'ImpresionSerigrafia', label: 'Impresión y Serigrafía -POP'},
            {value: 'IndustriaAgropecuaria', label: 'Indrustria Agropecuaria'},
            {value: 'IndustriaGastronomicas', label: 'Industria Gastronómica'},
            {value: 'IndustriaTextil', label: 'Industria Textil'},
            {value: 'InsumosEmpaques', label: 'Insumos para Empaques y Envíos'},
            {value: 'PapeleriaLibreria', label: 'Papelería y Libreria'},
            {value: 'SeguridadIndustrial', label: 'Seguridad Industrial'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
