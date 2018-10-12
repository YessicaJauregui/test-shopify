import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import AccesoriosExterior from './AccesoriosExterior.js';
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
            {value: 'AccesoriosExterior', label: 'Accesorios para el Exterior'},
            {value: 'AccesoriosInterior', label: 'Acesorios para el Interior'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
