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
            {value: 'AlimentacionBebe', label: 'Alimentación del Bebe'},
            {value: 'AlimentosBebe', label: 'Alimentos para Bebés'},
            {value: 'BañoBebe', label: 'Artículos de Baño para Bebés'},
            {value: 'Autoasientos', label: 'Autoasientos'},
            {value: 'Carriolas', label: 'Carriolas para Bebés'},
            {value: 'JuegosJuguetes', label: 'Juegos y Juguetes'},
            {value: 'Pañaleras', label: 'Pañaleras y Cambiadores'},
            {value: 'Portabebés', label: 'Portabebés'},
            {value: 'RecamaraBebe', label: 'Recámara de Bebés'},
            {value: 'RopaCalzadoBebe', label: 'Rop y Calzado para Bebés'},
            {value: 'SeguridadBebe', label: 'Seguridad para Bebés'},
            {value: 'Otros', label: 'Otros'},
          

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
