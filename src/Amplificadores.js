import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import Amplificadores from './Amplificadores.js';

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
            {value: 'W1001', label: 'De 1001W Hasta 1999W'},
            {value: 'W501', label: 'De 501W Hasta 1000W'},
            {value: 'W500', label: 'Hasta 500W'},
            {value: 'Mas2000', label: 'Mas de 2000w'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
