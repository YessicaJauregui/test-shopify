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
            {value: 'Preparados', label: 'Alimentos Preparados'},
            {value: 'Bebidas', label: 'Bebidas'},
            {value: 'Despensa', label: 'Despensa'},
            {value: 'Frescos', label: 'Frescos'},
            {value: 'Otros', label: 'Otros'},


          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
