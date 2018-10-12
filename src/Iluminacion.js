import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import ForoCalaveras from './ForoCalaveras';

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
            {value: 'FarosCalaveras', label: 'Faros y Calaveras'},
            {value: 'Focos', label: 'Focos'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
