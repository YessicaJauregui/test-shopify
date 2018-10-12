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
            {value: 'AccesoriosCamaras', label: 'Accesorios para Cámaras'},
            {value: 'Camaras', label: 'Cámaras'},
            {value: 'CamarasVideo', label: 'Cámaras de Video'},
            {value: 'CamaraEspía', label: 'Cámaras Espía y de Seguridad'},
            {value: 'CargadoresBaterias', label: 'Cargadores y Baterias'},
            {value: 'InstrumetosOpticos', label: 'Intrumentos Ópticos'},
            {value: 'Laboratorios', label: 'Laboratorios y Mini Labs'},
            {value: 'Portarretratos', label: 'Portarretratos y Álbunes'},
            {value: 'TarjetaMemoria', label: 'Tarjetas de Memoria'},
            {value: 'Otros', label: 'Otros'},


          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
