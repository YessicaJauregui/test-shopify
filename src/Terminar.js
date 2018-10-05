import React from 'react';
import {EmptyState,Button} from '@shopify/polaris';


export default class App extends React.Component {
  render() {
    return (
        <div style={{background:'white'}}>
      <EmptyState

  heading="Antes de terminar ¿Deseas eliminar el producto de prueba?"
  action={{content: 'Eliminar'}}


  image="https://i.pinimg.com/originals/51/88/ad/5188addfb90fe411be22b7f422e74117.png"
>
  <p>Si deseas eliminar, el producto será eliminado de manera permanente.

</p>
<div style={{float:'left', marginTop:'13px'}}>
<Button primary>Conservar</Button>
</div>
</EmptyState>
  </div>
    );
  }
}
