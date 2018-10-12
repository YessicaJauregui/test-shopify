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
            {value: 'BombaAceite', label: 'Bomba de Aceite'},
            {value: 'BombasAgua', label: 'Bombas de Agua'},
            {value: 'BombasCombustible', label: 'Bombas de Combustible'},
            {value: 'BombasInyectadas', label: 'Bombas Inyectadas'},
            {value: 'OtrasBombas', label: 'Otras Bombas'},

          selected={this.state.selected}
        />
      </Card>
    );
  }
}
