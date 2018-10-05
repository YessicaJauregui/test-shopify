import React from 'react';
import {EmptyState} from '@shopify/polaris';

export default class App extends React.Component {
  render() {
    return (
        <div style={{background:'white',padding:'-100px'}}>
      <EmptyState

  heading="Crea un producto de prueba"
  action={{content: 'Crear Producto'}}

  image="http://www.monicaalvarez.net/assets/images/shopify.gif"
>
  <p>Se creará un producto de prueba, el cual ira a tu base de datos de shopify no te preocupes despues podras borrarlo </p>

</EmptyState>
  </div>
    );
  }
}
