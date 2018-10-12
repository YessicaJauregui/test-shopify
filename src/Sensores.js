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
            {value: 'SensoresDetonacion', label: 'Sensores de Detonación'},
            {value: 'SensorPosicion', label: 'Sensor de Posición'},
            {value: 'SensorVelocidad', label: 'Sensor de Velocidad'},
            {value: 'SensorMAF', label: 'Sensor MAF'},
            {value: 'SensorMAP', label: 'Sensor MAP'},
            {value: 'SensoresCigueñal', label: 'Sensores de Cigueñal'},
            {value: 'SensoresOxigeno', label: 'Sensores de Oxigeno'},
            {value: 'OtrosSensores', label: 'Otros Sensores'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
