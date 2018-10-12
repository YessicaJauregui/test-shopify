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
            {value: 'AccesoriosComputacion', label: 'Accesorios de Computación'},
            {value: 'All-In-One', label: 'All In One'},
            {value: 'Apple', label: 'Apple'},
            {value: 'ComponentesPC', label: 'Componentes de PC'},
            {value: 'ComputadorasServidores', label: 'Computadoras y Servidores'},
            {value: 'dvd', label: 'DVDs y CDs Virgenes'},
            {value: 'EstuchesCajas', label: 'Estuches,Cajas y Sobres'},
            {value: 'Impresoras', label: 'Impresoras e Insumos'},
            {value: 'Laptops', label: 'Laptops'},
            {value: 'Memorias', label: 'Memorias Portátiles USB/FLASH'},
            {value: 'MemoriaRAM', label: 'Memorias RAM'},
            {value: 'MiniPC', label: 'Mini PCs'},
            {value: 'Monitores', label: 'Monitores y Proyectores'},
            {value: 'Pocket', label: 'Palma y Pocket PCs'},
            {value: 'Procesadores', label: 'Procesadores'},
            {value: 'Quemadores', label: 'Quemadores DVDs y CDs'},
            {value: 'Tinta', label: 'Recarga de Tinta'},
            {value: 'RedesInalambricas', label: 'Redes y Redes Inalámbricas'},
            {value: 'NoBreaks', label: 'Regulares y No Breaks'},
            {value: 'RespuestosLaptops', label: 'Repuestos para Laptops'},
            {value: 'SoftwareJuegos', label: 'Software y Juegos para PC'},
            {value: 'TarjetaVideo', label: 'Tarjetas de Video y Captura'},
            {value: 'TarjetasMadre', label: 'Tarjetas Madre -Motjerboards'},
            {value: 'Ultrabooks', label: 'Ultrabooks'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
