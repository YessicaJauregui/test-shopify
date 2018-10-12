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
            {value: 'Aerobics y Fitness', label: 'Aerobics y Fitness'},
            {value: 'ArtesMarciales', label: 'Artes Marciales,Box y Lucha'},
            {value: 'Automovilismo', label: 'Automovilismo'},
            {value: 'Badminton', label: 'Bádminton'},
            {value: 'Beisbol', label: 'Béisbol'},
            {value: 'Bicicletas', label: 'Bicicletas y Ciclismo'},
            {value: 'Billar', label: 'Billar'},
            {value: 'Buceo', label: 'Buceo'},
            {value: 'Camping', label: 'Camping y Pesca'},
            {value: 'Deportes Extremos', label: 'Deportes Extremos'},
            {value: 'Futbol', label: 'Fúltbol'},
            {value: 'Americano', label: 'Fúltbol Americano'},
            {value: 'Golf', label: 'Golf'},
            {value: 'Hockey', label: 'Hockey'},
            {value: 'Natacion', label: 'Natación'},
            {value: 'Paintball', label: 'Paintball'},
            {value: 'PilaresYoga', label: 'Pilares y Yoga'},
            {value: 'PingPong', label: 'Ping Pong'},
            {value: 'RelojesDeportivos', label: 'Relojes Deportivos'},
            {value: 'RopaDeportiva', label: 'Ropa Deportiva'},
            {value: 'Scooters', label: 'Sketes,Scooters y Patines'},
            {value: 'Tenis', label: 'Tenis'},
            {value: 'Paddle', label: 'Tenis,Paddle y Squash'},
            {value: 'CO2', label: 'Tiro Deportivo-CO2 y Aire'},
            {value: 'VitaminasSuplementos', label: 'Vitaminas y Suplementos'},
            {value: 'Volleyball', label: 'Volleyball'},
            {value: 'Otros', label: 'Otros'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
