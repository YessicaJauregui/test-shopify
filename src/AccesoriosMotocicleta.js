import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import RopaCalzado from './RopaCalzado.JS';
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
            {value: 'Alarmas', label: 'Alarmas'},
            {value: 'Alforjas', label: 'Alforjas'},
            {value: 'Botas', label: 'Botas'},
            {value: 'Caballetes', label: 'Caballetes'},
            {value: 'Cajas', label: 'Cajas y Cajuelas'},
            {value: 'Cargadores', label: 'Cargadores'},
            {value: 'Cascos', label: 'Cascos'},
            {value: 'Emblemas', label: 'Emblemas'},
            {value: 'Fundas', label: 'Fundas'},
            {value: 'Goggles', label: 'Goggles'},
            {value: 'Guantes', label: 'Guantes'},
            {value: 'Intercomunicadores', label: 'Intercomunicadores'},
            {value: 'Mascaras', label: 'Máscaras y Antifaces'},
            {value: 'Mochilas', label: 'Mochilas'},
            {value: 'Parabrisas', label: 'Parabrisas'},
            {value: 'Pecheras', label: 'Pecheras'},
            {value: 'Puños', label: 'Puños'},
            {value: 'Rampas', label: 'Rampas'},
            {value: 'RedPortabultos', label: 'Red Portabultos'},
            {value: 'Rodilleras', label: 'Rodilleras'},
            {value: 'Ropa y Calzado', label: 'Ropa y Calzado'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
