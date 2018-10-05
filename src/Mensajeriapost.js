import React from 'react';
import {Card} from '@shopify/polaris';

export default class App extends React.Component {
  render() {
    return (
      <Card title="Mensajeria Automatica Post Venta" sectioned>
      <div style={{padding:'10px'}}>
  <p>Define y activa los mensajes automaticos que se enviaran a tus clientes.</p>
  </div>
  <Card title="Notificar Envio Listo ➕✉ " sectioned>
  </Card>
  <Card title="Mensaje al recibir una orden de compra con envio ➕✉ " sectioned>
  </Card>
  <Card title="Mensaje al recibir una orden de compra con entrega personal ➕✉ " sectioned>
  </Card>
  <Card title="Mensaje cuando la empresa de envio acusa recibo del paquete ➕✉ " sectioned>
  </Card>
</Card>
    );
  }
}
