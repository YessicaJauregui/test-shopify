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
            {value: 'Antenas', label: 'Antenas'},
            {value: 'Bases', label: 'Bases y Soportes'},
            {value: 'Baterias', label: 'Baterías'},
            {value: 'Cables', label: 'Cables'},
            {value: 'Cargadores', label: 'Cargadores'},
            {value: 'Fundas', label: 'Fundas'},
            {value: 'Memorias', label: 'Memorias'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
