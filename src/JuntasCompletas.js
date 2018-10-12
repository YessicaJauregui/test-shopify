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
            {value: 'JuntasAdministracion', label: 'Juntas de Administración'},
            {value: 'JuntasCabeza', label: 'Juntas de Cabeza'},
            {value: 'JuntasCarter', label: 'Juntas de Carter'},
            {value: 'JuntasEscape', label: 'Juntas de Escape'},
            {value: 'JuntasMotor', label: 'Juntas de Motor'},
            {value: 'JuntasPunteria', label: 'Juntas de Tapas de Puntería'},
            {value: 'OtrasJuntas', label: 'Otras Juntas'},
            
          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
