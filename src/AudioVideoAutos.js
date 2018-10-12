import React from 'react';
import {Card, List, OptionList} from '@shopify/polaris';
import Amplificadores from './Amplificadores.js';
import AutoestéreosMP3 from './AutoestéreosMP3.js';

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
            {value: 'Amplificadores', label: 'Amplificadores'},
            {value: 'Arneses', label: 'Arneses'},
            {value: 'AutoestereosCD', label: 'Autoestéreos con CD'},
            {value: 'AutoestéreosGPS', label: 'Autoestéreos con GPS'},
            {value: 'AutoestéreosMP3', label: 'Autoestéreos con MP3'},
            {value: 'AutoestéreosDVD', label: 'Autoestéreos DVD'},
            {value: 'Bocinas y Tweeters', label: 'Bocinas y Tweeters'},
            {value: 'Capacitadores', label: 'Capacitadores'},
            {value: 'ControlesRemotos', label: 'Controles Remotos'},
            {value: 'Ecualizadores', label: 'Ecualizadores'},
            {value: 'Epicentros', label: 'Epicentros'},
            {value: 'FrentesEstereos', label: 'Frentes para Estereos'},
            {value: 'Inversores', label: 'Inversores'},
            {value: 'Pantallas', label: 'Pantallas'},
            {value: 'Transmisores FM', label: 'Transmisores FM'},
            {value: 'Woofers y SubWoofers', label: 'Woofers y SubWoofers'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
