import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import ForoCalaveras from './ForoCalaveras';
import Aceite from './Aceite.js';
import Bombas from './Bombas.js';
import ComponentesMotor from './ComponentesMotor.js';
import Distribucion from './Distribucion.js';
import JuntasCompletas from './JuntasCompletas.js';
import Radiadores from './Radiadores.js';

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
            {value: 'Aceite', label: 'Aceite'},
            {value: 'Baleros', label: 'Baleros'},
            {value: 'BandaAccesorios', label: 'Banda de Accesorios'},
            {value: 'BayonetasNivelAceite', label: 'Bayonetas Nivel de Aceite'},
            {value: 'Bombas', label: 'Bombas'},
            {value: 'Carburadores', label: 'Carburadores'},
            {value: 'CilindrosRueda', label: 'Cilindros de Rueda'},
            {value: 'ComponentesMotor', label: 'Componentes de Motor'},
            {value: 'Distribucion', label: 'Distribución'},
            {value: 'JuntasCompletas', label: 'Juntas Completas'},
            {value: 'KitAfinacion', label: 'Kit de Afinación'},
            {value: 'MotorCompleto', label: 'Motor Completo'},
            {value: 'MultiplesAdmision', label: 'Multiples Admisión'},
            {value: 'PoleasCigueñal', label: 'Poleas de Cigueñal'},
            {value: 'Radiadores', label: 'Radiadores'},
            {value: 'Retenes', label: 'Retenes'},
            {value: 'SensorAceite', label: 'Sensor de Aceite'},
            {value: 'SensorTemperatura', label: 'Sensor de Temperatura'},
            {value: 'SensorTemperaturaAire', label: 'Sensor de Temperatura de Aire'},
            {value: 'SoportesMotor', label: 'Soportes de Motor'},
            {value: 'TapaAceite', label: 'Tapa de Aceite'},
            {value: 'TolvasMotor', label: 'Tolvas de Motor'},
            {value: 'Turbos', label: 'Turbos'},
            {value: 'OtrasPiezasMotor', label: 'Otras Piezas de Motor'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
