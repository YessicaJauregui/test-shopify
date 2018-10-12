import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import RopaCalzado from './RopaCalzado.JS';
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
            {value: 'Calcetines', label: 'Calcetines'},
            {value: 'Camisas', label: 'Camisas'},
            {value: 'Camisetas', label: 'Camisetas'},
            {value: 'Chalecos', label: 'Chalecos'},
            {value: 'Chamarras', label: 'Chamarras'},
            {value: 'Cinturones', label: 'Cinturones'},
            {value: 'Gorras', label: 'Gorras'},
            {value: 'Impermeables', label: 'Impermeables'},
            {value: 'Pantalones', label: 'Pantalones'},
            {value: 'Playeras', label: 'Playeras'},
            {value: 'Shorts', label: 'Shorts'},
            {value: 'Trajes', label: 'Trajes'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
