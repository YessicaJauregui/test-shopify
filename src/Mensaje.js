import React from 'react';
import {Card,Button} from '@shopify/polaris';
import TextFieldMensaje from './TextFieldMensaje.js';
export default class App extends React.Component {
  render() {
    return (
      <div style={{padding:'20px'}}>
      <Card title="Mensaje Actual" sectioned>
  <p>Mensaje actual a mostrar.</p>
    <Card title="Redactar Nuevo Mensaje" sectioned>
    <TextFieldMensaje></TextFieldMensaje>
    <div style={{marginTop:'20px'}}>
  <Button primary size="small">Actualizar Mensaje</Button>
</div>
    </Card>
</Card>
</div>
    );
  }
}
