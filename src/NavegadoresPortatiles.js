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
            {value: 'Garmin', label: 'Garmin'},
            {value: 'Magallan', label: 'Magallan'},
            {value: 'OtrasMarcas', label: 'Otras Marcas'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
