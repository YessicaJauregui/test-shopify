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
            {value: 'Abrigos', label: 'Abrigos'},
            {value: 'AccesoriosModa', label: 'Accesorios de Moda'},
            {value: 'Bermudas', label: 'Bermudad y Shorts'},
            {value: 'Blusas', label: 'Blusas'},
            {value: 'BolsasCarteras', label: 'Bolsas y Carteras'},
            {value: 'Camisas', label: 'Camisas'},
            {value: 'Chalecos', label: 'Chalecos'},
            {value: 'Chamarras', label: 'Chamarras'},
            {value: 'ConjuntosPlacas', label: 'Conjuntos,Placas y Lotes'},
            {value: 'Faldas', label: 'Faldas'},
            {value: 'Jumpsuits', label: 'Jumpsuits y Overoles'},
            {value: 'Leggings', label: 'Leggings'},
            {value: 'Lentes', label: 'Lentes'},
            {value: 'Pantalones', label: 'Pantalones y Jeans'},
            {value: 'Playeras', label: 'Playeras'},
            {value: 'Polos', label: 'Polos'},
            {value: 'Ponchos', label: 'Ponchos'},
            {value: 'Ropa Deportiva', label: 'Ropa Deportiva'},
            {value: 'RopaInterior', label: 'Ropa Interior'},
            {value: 'Ropa para Bebés', label: 'Ropa para Bebés'},
            {value: 'RopaDormir', label: 'Ropa para Dormir'},
            {value: 'SudaderasHoddies', label: 'Sudaderas y Hoddies'},
            {value: 'Sweaters', label: 'Sweaters y Cardigans'},
            {value: 'Tenis', label: 'Tenis'},
            {value: 'Trajes', label: 'Trajes'},
            {value: 'TrajesBaño', label: 'Trajes de Baño'},
            {value: 'Uniformes', label: 'Uniformes'},
            {value: 'Vestidos', label: 'Vestidos'},
            {value: 'Zapatos', label: 'Zapatos'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
