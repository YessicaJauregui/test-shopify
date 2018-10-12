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
            {value: 'Abrillantadores', label: 'Abrilllantadores'},
            {value: 'Anticorrosivos', label: 'Anticorrosivos para Autos'},
            {value: 'Aromatizadores', label: 'Aromatizadores'},
            {value: 'Aspiradoras', label: 'Aspiradoras para Autos'},
            {value: 'Cera Autos', label: 'Cera para Autos'},
            {value: 'Chupon', label: 'Chupón Saca Golpes'},
            {value: 'CompuestoPulidor', label: 'Compuesto Pulidor'},
            {value: 'Desengrasantes', label: 'Desengrasantes'},
            {value: 'Fix it Pro', label: 'Fix it Pro'},
            {value: 'PañosAutos', label: 'Paños para Autos'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
