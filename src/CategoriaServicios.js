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
            {value: 'Belleza', label: 'Belleza y Cuidado Personal'},
            {value: 'Clases', label: 'Clases, Cursoss y Capacitaciones'},
            {value: 'Herramientas', label: 'Herramientas y Construcción'},
            {value: 'Eventos', label: 'Fiestas y Eventos'},
            {value: 'Industrias', label: 'Industrias y Oficinas'},
            {value: 'Hogar1', label: 'Hogar'},
            {value: 'Imprenta', label: 'Imprenta'},
            {value: 'Mantenimiento de Vehiculos', label: 'Mantenimiento de Vehículos'},
            {value: 'Profesionales', label: 'Profesionales'},
            {value: 'Recreacion', label: 'Recreación y Turismo'},
            {value: 'Servicios', label: 'Servicios de Reparación'},
            {value: 'Mascotas', label: 'Servicios para Mascotas'},
            {value: 'Transporte', label: 'Transporte'},
            {value: 'Otros Servicios', label: 'Otros Servicios'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
