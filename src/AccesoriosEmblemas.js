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
            {value: 'Audi', label: 'Audi'},
            {value: 'BMW', label: 'BMW'},
            {value: 'Cadillac', label: 'Cadillac'},
            {value: 'Cherokee', label: 'Cherokee'},
            {value: 'Chevrolet', label: 'Chevrolet'},
            {value: 'Chrysler', label: 'Chrysler'},
            {value: 'Dodge', label: 'Dodge'},
            {value: 'Ford', label: 'Ford'},
            {value: 'GMC', label: 'GMC'},
            {value: 'Honda', label: 'Honda'},
            {value: 'Isuzu', label: 'Isuzu'},
            {value: 'Mazda', label: 'Mazda'},
            {value: 'Mercedes', label: 'Mercedes Benz'},
            {value: 'Mitsubishi', label: 'Mitsubishi'},
            {value: 'Nissan', label: 'Nissan'},
            {value: 'Peugeot', label: 'Peugeot'},
            {value: 'Renault', label: 'Renault'},
            {value: 'Seat', label: 'Seat'},
            {value: 'Suzuki', label: 'Suzuki'},
            {value: 'Toyota', label: 'Toyota'},
            {value: 'Volkswgen', label: 'Volkswgen'},
            {value: 'OtrosMarcas', label: 'Otros Marcas'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
