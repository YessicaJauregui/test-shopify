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
            {value: 'Alpine', label: 'Alpine'},
            {value: 'Clarion', label: 'Clarion'},
            {value: 'JVC', label: 'JVC'},
            {value: 'Keenwood', label: 'Kenwood'},
            {value: 'Lg', label: 'Lg'},
            {value: 'Originales', label: 'Originales'},
            {value: 'Pioneer', label: 'Pioneer'},
            {value: 'Sony', label: 'Sony'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
