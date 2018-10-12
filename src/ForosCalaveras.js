import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import ForoCalaveras from './ForoCalaveras';

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
            {value: 'Calaveras', label: 'Calaveras'},
            {value: 'Direccional', label: 'Direccional'},
            {value: 'FaroStop', label: 'Faro Stop'},
            {value: 'FaroNiebla', label: 'Faro Niebla'},
            {value: 'FarosPlacas', label: 'Faros de Placas'},
            {value: 'FarosDelanteros', label: 'Faros Delanteros'},
            {value: 'MicaCalaveras', label: 'Mica de Calaveras'},
            {value: 'OtrosTipos', label: 'Otros Tipos'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
