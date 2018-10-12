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
            {value: 'ExhibidoresAlhajeros', label: 'Exhibidores y Alhajeros'},
            {value: 'HerramientasJoyeria', label: 'Herramientas de Joyería'},
            {value: 'Joyeria', label: 'Joyería'},
            {value: 'Piedras Preciosas', label: 'Piedras Preciosas'},
            {value: 'PlumasBoligrafos', label: 'Plumas y Boligrafos'},
            {value: 'Relojes', label: 'Relojes'},
            {value: 'SmartWatch', label: 'SmartWatch'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
