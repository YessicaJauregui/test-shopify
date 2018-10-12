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
            {value: 'AccesoriosCelulares', label: 'Accesorios para Celulares'},
            {value: 'Celulares', label: 'Celulares y Smartphones'},
            {value: 'Radiofrecuencia', label: 'Equipos de Radiofrecuencia'},
            {value: 'iden', label: 'iDEN-Nextel'},
            {value: 'RepuestosCelulares', label: 'Repuestos de Celulares'},
            {value: 'TarjetasMemoria', label: 'Tarjetas de Memoria'},
            {value: 'TelefoniaIP', label: 'Telefonía IP'},
            {value: 'TelefonosConvenionales', label: 'Teléfonos Convencionales'}
            {value: 'Otros', label: 'Otros'},


          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
