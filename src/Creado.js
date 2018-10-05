import React from 'react';
import {EmptyState} from '@shopify/polaris';

export default class App extends React.Component {
  render() {
    return (
        <div style={{}}>
      <EmptyState

  heading="Producto Creado"
  action={{content: 'Ver producto'}}


  image="https://www.syncee.io/wp-content/uploads/2018/02/cart-people-1.png"
>
  <p>Ya hemos creado un producto de prueba, ahora veremos en donde podemos verlo de manera sencilla y posteriormente podremos editar todos los atributos de su publicacion.

</p>


</EmptyState>
  </div>
    );
  }
}
