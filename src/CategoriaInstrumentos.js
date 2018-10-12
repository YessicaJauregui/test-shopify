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
            {value: 'Amplificadores', label: 'Amplificadores'},
            {value: 'BateriasPercusion', label: 'Baterías y Percisión'},
            {value: 'IndrumentosCuerdas', label: 'Instrumentos de Cuerdas'},
            {value: 'InstrumentosViento', label: 'Instrumentos de Viento'},
            {value: 'Metrónomos', label: 'Metrónomos'},
            {value: 'PartiturasAtriles', label: 'Partituras y Atriles'},
            {value: 'PedalesEfectosSonido', label: 'Pedales y Efectos de Sonido'},
            {value: 'TecladosPianos', label: 'Teclados y Pianos'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
