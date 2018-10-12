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
            {value: 'AudioVideo', label: 'Accesorios para Audio y Video'},
            {value: 'AudioCasa', label: 'Audio para tu Casa'},
            {value: 'AudioPortatil', label: 'Audio Portátil'},
            {value: 'AudioProfesional', label: 'Audio Profesional y DJs'},
            {value: 'AudioVideoAutos', label: 'Audio y Video para Autos'},
            {value: 'BlueRay', label: 'Blue-ray Players y Video'},
            {value: 'CalculadorasyAgendas', label: 'Calculadoras y Agendas'},
            {value: 'ComponentesElectronicos', label: 'Componentes Electrónicos'},
            {value: 'CopiadorasInsumos', label: 'Copiadoras e Insumos'},
            {value: 'Drones', label: 'Drones'},
            {value: 'Players', label: 'DVD Players y Video'},
            {value: 'gps', label: 'GPS'},
            {value: 'IntrumentosO', label: 'Instrumentos Ópticos'},
            {value: 'iphod', label: 'iPhod'},
            {value: 'mp3', label: 'MP3 y MP4 Players'},
            {value: 'Pilas y Cargadores', label: 'Pilas y Cargadores'},
            {value: 'Proyectores', label: 'Proyectores y Pantallas'},
            {value: 'RepuestosAudio', label: 'Repuestos para Audio y Video'},
            {value: 'Seguridad', label: 'Seguridad y Vigilancia'},
            {value: 'Televisores', label: 'Televisores'},
            {value: 'OtrosElectronicos', label: 'Otros Electrónicos'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
