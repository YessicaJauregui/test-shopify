import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';

import Tweeters from './Tweeters.js';

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
            {value: 'Bocinas1', label: '4"'},
            {value: 'Bocinas2', label: '5" x 7"'},
            {value: 'Bocinas3', label: '6" x 9"'},
            {value: 'Bocinas4', label: '6.5"'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
