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
            {value: 'Accesorios', label: 'Garmin'},
            {value: 'Equipos', label: 'Magallan'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
