import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import Accesorios from './Accesorios.js';
import Equipos from './Equipos.js';



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
            {value: 'Accesorios', label: 'Accesorios'},
            {value: 'Equipos', label: 'Equipos'},
            {value: 'Mapas', label: 'Mapas'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
