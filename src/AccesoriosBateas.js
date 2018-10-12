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
            {value: 'Amplificadores', label: 'Amplificadores'},
            {value: 'Campers', label: 'Campers'},
            {value: 'Capotas', label: 'Capotas'},
            {value: 'Roll', label: 'Roll Bar'},
            {value: 'TapasBatea', label: 'Tapas de Batea'},
            {value: 'OtrosBatea', label: 'Otros Accesorios para Bateass'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
