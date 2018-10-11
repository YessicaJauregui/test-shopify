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

            {value: 'Accesorios', label: 'Accesorios para Vehículo'},
            {value: 'Alimentos', label: 'Alimentos y Bebidas'},
            {value: 'Animales', label: 'Animales y Mascotas'},
            {value: 'Arte', label: 'Arte y Antiguedades'},
            {value: 'Autos', label: 'Autos, Motos y Otros'},
            {value: 'Bebes', label: 'Bebés'},
            {value: 'Belleza', label: 'Belleza y Cuidado Personal'},
            {value: 'Camaras', label: 'Cámaras y Accesorios'},
            {value: 'Celulares', label: 'Celulares y Telefonía'},
            {value: 'Coleccionables', label: 'Coleccionables'},
            {value: 'Computacion', label: 'Computación'},
            {value: 'Consolas', label: 'Consolas y Videojuegos'},
            {value: 'Deportes', label: 'Deportes y Fitness'},
            {value: 'Electrodomesticos', label: 'Electrodomésticos'},
            {value: 'Electronica, Audio y Video', label: 'Electrónica, Audio y Video'},
            {value: 'Herramientas', label: 'Herramientas y Construcción'},
            {value: 'Hogar', label: 'Hogar, Muebles y Jardín'},
            {value: 'Industrias', label: 'Industrias y Oficinas'},
            {value: 'Inmuebles', label: 'Inmuebles'},
            {value: 'Instrumentos', label: 'Instrumentos Musicales'},
            {value: 'Joyas', label: 'Joyas y Relojes'},
            {value: 'Juegos', label: 'Juegos y Juguetes'},
            {value: 'Libros', label: 'Libros, Revistas y Comics'},
            {value: 'Música', label: 'Música, Peliculas y Series'},
            {value: 'Recuerdos', label: 'Recuerdos, Cotillón y Fiestas'},
            {value: 'Ropa', label: 'Ropa, Bolsas y Calzado'},
            {value: 'Salud', label: 'Salud y Equipamiento Médico'},
            {value: 'Servicios', label: 'Servicios'},
            {value: 'Otras', label: 'Otras Categorias'},

          ]}
          selected={this.state.selected}
        />
      </Card>
    );
  }
}
