import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import NavegadoresAutos from '/NavegadoresAutos.js';
import NavegadoresPortatiles from './NavegadoresPortatiles.js';
import AiresAcondicionados  from './AiresAcondicionados.js';
import Calefaccion from './Calefaccion,js';
import Carroceria from './Carroceria.js';
import Cristales from './Cristales.js';
import FiltrosPortaFiltros from './FiltrosPortaFiltros.js';
import Frenos from './Frenos.js';
import Balatas from './Balatas.js';
import Iluminacion from './Iluminacion.js';
import Inyeccion from './Inyeccion.js';
import Motor from './Motor.js';

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
            {value: 'AireAcondicionados', label: 'Aire Acondicionados'},
            {value: 'Calefaccion', label: 'Calefacción'},
            {value: 'Carroceria', label: 'Carrocería'},
            {value: 'Cerraduras', label: 'Cerraduras y Llaves'},
            {value: 'ComponentesSeguridad', label: 'Componentes de Seguridad'},
            {value: 'Cristales', label: 'Cristales'},
            {value: 'EspejosRetrovisores', label: 'Espejos Retrovisores'},
            {value: 'FiltrosPorta', label: 'Filtros y Porta Filtros'},
            {value: 'Frenos', label: 'Frenos'},
            {value: 'Iluminacion', label: 'Iluminación'},
            {value: 'Inyeccion', label: 'Inyección'},
            {value: 'Motor', label: 'Motor'},
            {value: 'Motoventiladores', label: 'Motoventiladores'},
            {value: 'RefaccionesExterior', label: 'Refacciones de Exterior'},
            {value: 'RefaccionesInterior', label: 'Refacciones Interior'},
            {value: 'SistemaEncendido', label: 'Sistema de Encendido'},
            {value: 'SistemaPotencias', label: 'Sistema de Potencias'},
            {value: 'SuspencionDireccion', label: 'Suspención y Dirección'},
            {value: 'Transmision', label: 'Transmisión'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
