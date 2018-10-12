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
            {value: 'AceitesMotor', label: 'Aceites de Motor'},
            {value: 'AceitesHidraulicos', label: 'Aceites Hidráulicos'},
            {value: 'AceitesTransmision', label: 'Aceites para Transmisión'},
          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
