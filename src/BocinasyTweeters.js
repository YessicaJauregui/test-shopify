import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import Bocinas from './Bocinas.js';
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
            {value: 'Bocinas', label: 'Bocinas'},
            {value: 'Tweeters', label: 'Tweeters'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
