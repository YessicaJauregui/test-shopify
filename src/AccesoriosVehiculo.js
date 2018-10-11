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
            {value: 'Autos', label: 'Accesorios para Autos'},
            {value: 'Cuatrimotos', label: 'Accesorios para Cuatrimotos'},
            {value: 'Motocicleta', label: 'Accesorios para Motocicleta'},
            {value: 'AudioAuto', label: 'Audio y Video para Autos'},
            {value: 'Automotriz', label: 'Cuidado Automotriz'},
            {value: 'HerramientasAuto', label: 'Herramientas'},
            {value: 'Llantas', label: 'Llantas'},
            {value: 'Navegadores GPS', label: 'Navegadores GPS'},
            {value: 'RefaccionesAuto', label: 'Refacciones Autos y Camionetas'},
            {value: 'CuatrimotosRefa', label: 'Refacciones para Cuatrimotos'},
            {value: 'Motocicleta', label: 'Refacciones para Motocicleta'},
            {value: 'Rines', label: 'Rines'},
            {value: 'SeguridadVehicular', label: 'Seguridad Vehicular'},
            {value: 'Turing', label: 'Turing y Performance'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
