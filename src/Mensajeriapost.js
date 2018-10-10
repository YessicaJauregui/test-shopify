import React from 'react';
import {Card,Link} from '@shopify/polaris';

export default class App extends React.Component {
  render() {
    return (
      <Card title="Mensajeria Automatica Post Venta" sectioned>
      <div style={{padding:'10px'}}>
  <p>Define y activa los mensajes automaticos que se enviaran a tus clientes.</p>
  </div>
  <Card title="Notificar Envio Listo " sectioned>
<div style={{marginLeft:'160px',marginTop:'-41px'}}>
  <Link url="www.google.mx">➕</Link>
  </div>
  <div style={{marginLeft:'180px',marginTop:'-20px',fontSize:'20px'}}>
    <Link url="www.google.mx">💬</Link>
    </div>
  </Card>

  <Card title="Mensaje al recibir una orden de compra con envio " sectioned>
  <div style={{marginLeft:'380px',marginTop:'-41px'}}>
    <Link url="www.google.mx">➕</Link>
    </div>
    <div style={{marginLeft:'400px',marginTop:'-20px',fontSize:'20px'}}>
      <Link url="www.google.mx">💬</Link>
      </div>
  </Card>
  <Card title="Mensaje al recibir una orden de compra con entrega personal " sectioned>
  <div style={{marginLeft:'460px',marginTop:'-41px'}}>
    <Link url="www.google.mx">➕</Link>
    </div>
    <div style={{marginLeft:'480px',marginTop:'-20px',fontSize:'20px'}}>
      <Link url="www.google.mx">💬</Link>
      </div>
  </Card>
  <Card title="Mensaje cuando la empresa de envio acusa recibo del paquete" sectioned>
  <div style={{marginLeft:'480px',marginTop:'-41px'}}>
    <Link url="www.google.mx">➕</Link>
    </div>
    <div style={{marginLeft:'500px',marginTop:'-20px',fontSize:'20px'}}>
      <Link url="www.google.mx">💬</Link>
      </div>
  </Card>
</Card>
    );
  }
}
