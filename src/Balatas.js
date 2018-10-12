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
            {value: 'Akebono', label: 'Akebono'},
            {value: 'Bendix', label: 'Bendix'},
            {value: 'Bosch', label: 'Bosch'},
            {value: 'Brembo', label: 'Brembo'},
            {value: 'Dinamik', label: 'Dynamik'},
            {value: 'Fritec', label: 'Fritec'},
            {value: 'Hawk', label: 'Hawk'},
            {value: 'Originales', label: 'Originales'},
            {value: 'Ruville', label: 'Ruville'},
            {value: 'TRW', label: 'TRW'},
            {value: 'Wagner', label: 'Wagner'},
            {value: 'OtrosMarcas', label: 'Otras Marcas'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
