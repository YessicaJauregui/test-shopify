import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import AccesoriosBateas from './AccesoriosBateas.js';
import AccesoriosBurreras from './AccesoriosBurreras.js';
import AccesoriosDeflectores from './AccesoriosDeflectores.js';
import AccesoriosEmblemas from './AccesoriosEmblemas.js';
import AcceseriosFundas from './AcceseriosFundas.js';
import AccesoriosPortaEquipaje from './AccesoriosPortaEquipaje.js';
import AccesoriosTirones from './AccesoriosTirones.js';

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
            {value: 'AccesoriosBateas', label: 'Accesorios para Bateas'},
            {value: 'Antenas', label: 'Antenas'},
            {value: 'Burreras', label: 'Burreras'},
            {value: 'CamarasReversa', label: 'Cámaras de Reversa'},
            {value: 'Cantoneras', label: 'Cantoneras'},
            {value: 'CentrosRin', label: 'Centros de Rin'},
            {value: 'CubreManijas', label: 'CubreManijas'},
            {value: 'Deflectores', label: 'Deflectores'},
            {value: 'Emblemas', label: 'Emblemas'},
            {value: 'Espaciadores de Rines', label: 'Espaciadores de Rines'},
            {value: 'Estribos', label: 'Estribos'},
            {value: 'Fundas', label: 'Fundas y Cubiertas'},
            {value: 'Loderas', label: 'Loderas'},
            {value: 'Molduras', label: 'Molduras'},
            {value: 'PortaEquipaje', label: 'Porta Equipaje y Barras'},
            {value: 'PortaPlacas', label: 'Porta Placas'},
            {value: 'Snorkel', label: 'Snorkel'},
            {value: 'Stickers', label: 'Stickers'},
            {value: 'TaponesRin', label: 'Tapones de Rin'},
            {value: 'Tirones', label: 'Tirones'},
            {value: 'Winches', label: 'Winches'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
