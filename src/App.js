import React from 'react';
import {Avatar, Card, Label, List, ResourceList, Select, TextStyle,TextField} from '@shopify/polaris';
import Flechas from './Flechas.js';
import Bienvenida from './Bienvenida.js';
import Ordenes from './Ordenes.js';
import Desplegable from './Desplegable.js';
import Desplegable2 from './Desplegable2.js';
import Field from './Field.js';
import Principal from './Principal.js';
import Onboarding from './Onboarding.js';
import Creado from './Creado.js';
import Terminar from './Terminar.js';
import Mensajeriapost from './Mensajeriapost.js';

export default class ResourceListExample extends React.Component {
  state = {
    selectedItems: [],
  };

  handleSelectionChange = (selectedItems) => {
    this.setState({selectedItems});
  };

  renderItem = (item) => {
    const {id, url, name, location} = item;
    const media = <Avatar customer size="medium" name={name} />;
// prueba 
    return (
      <ResourceList.Item
        id={id}
        url={url}
        media={media}
        accessibilityLabel={`View details for ${name}`}
      >
        <h3>
          <TextStyle variation="strong">{name}</TextStyle>
        </h3>
        <div>{location}</div>
      </ResourceList.Item>
    );
  };

  render() {
    const resourceName = {
      singular: 'customer',
      plural: 'customers',
    };

    const items = [
      {
        id: 341,
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
      },
      {
        id: 256,
        url: 'customers/256',
        name: 'Ellen Ochoa',
        location: 'Los Angeles, USA',
      },
      {
        id: 351,
        url: 'customers/351',
        name: 'Mae joind',
        location: 'Decatur, USA',
      },
      {
        id: 259,
        url: 'customers/259',
        name: 'Ellen Chavez',
        location: 'Los Angeles, USA',
      },
    ];

    const promotedBulkActions = [

];
    const bulkActions = [
      {
        content: 'Modificar descripción',
        onAction: () => console.log('Todo: implement bulk add tags'),
      },
      {
        content: 'Modificar Atributos',
        onAction: () => console.log('Todo: implement bulk remove tags'),
      },
      {
        content: 'Modificar Inventario',
        onAction: () => console.log('Todo: implement bulk delete'),
      },
    ];

    return (

      <div style={{width:'90em',height:'50em',padding:'5em'}}>
      <Mensajeriapost></Mensajeriapost>
      <Terminar></Terminar>
      <Creado></Creado>
        <Onboarding></Onboarding>
      <Principal></Principal>

      <Bienvenida></Bienvenida>
<Ordenes></Ordenes>

      <div style={{padding:'5px'}}>
      <Flechas></Flechas>
    <Desplegable></Desplegable>
  <Desplegable2></Desplegable2>
<div style={{width:'363px',marginLeft:'750px',height:'35px'}}>
  <Field></Field>
  </div>


  </div>
      <Card>
        <ResourceList
          resourceName={resourceName}
          items={items}
          renderItem={this.renderItem}
          selectedItems={this.state.selectedItems}
          onSelectionChange={this.handleSelectionChange}
          promotedBulkActions={promotedBulkActions}
          bulkActions={bulkActions}
        />
      </Card>
      </div>
    );
  }
}
