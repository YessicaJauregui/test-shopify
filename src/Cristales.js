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
            {value: 'CristalesLaterales', label: 'Cristales Laterales'},
            {value: 'CristalesTraseros', label: 'Cristales Traseros'},
            {value: 'Elevadores', label: 'Elevadores'},
            {value: 'Parabrisas', label: 'Parabrisas'},
            {value: 'OtrosCristales', label: 'Otros Cristales'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
