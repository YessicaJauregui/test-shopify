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
            {value: 'Aromaterapia', label: 'Aromaterapia'},
            {value: 'Cuidado de la Salud', label: 'Cuidado de la Salud'},
            {value: 'EquipamientoMedico', label: 'Equipamiento Médico'},
            {value: 'Ortopedia', label: 'Ortopedia'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
