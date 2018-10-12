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
            {value: 'Camaras', label: 'Cámaras'},
            {value: 'LlantasAutos', label: 'Llantas Autos y Camionetas'},
            {value: 'LlantasMoto', label: 'Llantas para Motos'},
            {value: 'OtrasLlantas', label: 'Otras Llantas'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
