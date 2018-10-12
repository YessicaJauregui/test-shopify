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
            {value: 'ArticulosPeluqueria', label: 'Articulos de Peluqueria'},
            {value: 'Barberia', label: 'Barberia'},
            {value: 'CabelloCuidado', label: 'Cuidado del Cabello'},
            {value: 'Depilacion', label: 'Depilación'},
            {value: 'BellezaElectrodomesticos', label: 'Electrodomésticos de Belleza'},
            {value: 'Farmacia', label: 'Farmacia'},
            {value: 'HigienePersonal', label: 'Higiene Personal'},
            {value: 'Manicure', label: 'Manicure y pedicure'},
            {value: 'Maquillajes', label: 'Maquillajes'},
            {value: 'MueblesEstetica', label: 'Muebles para Estética'},
            {value: 'Fragancias', label: 'Perfumes y Fragancias'},
            {value: 'Tratamientos de Belleza', label: 'Tratamientos de Belleza'},
            {value: 'Otros', label: 'Otros'},


          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
