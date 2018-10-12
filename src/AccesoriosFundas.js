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
            {value: 'Antifaces', label: 'Antifaces'},
            {value: 'CybiertasLlantas', label: 'Cubiertas de Llantas'},
            {value: 'Fundas', label: 'Fundas'},
            {value: 'OtrasFundas', label: 'Otras Fundas y Cubiertas'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
