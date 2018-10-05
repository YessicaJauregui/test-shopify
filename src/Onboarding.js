import React from 'react';
import {EmptyState} from '@shopify/polaris';

export default class App extends React.Component {
  render() {
    return (
        <div style={{background:'white'}}>
      <EmptyState

  heading="¡FELICIDADES!"
  action={{content: 'Iniciar Onboarding'}}


  image="https://cdn-images-1.medium.com/max/800/1*qDkrPKehwPcZlmkhZF1yiA.png"
>
  <p>Has llegado lejos, marketful seller center esta casi listo para funcionar, solo nos falta mostrarte la simpleza de su funcionamiento.
Preparate en los siguientes minutos aprenderas a administrar tus productos de Shopify y poder modificar los atributos de la publicación de ese producto dentro de Mercado Libre., ¡Comencemos!

</p>


</EmptyState>
  </div>
    );
  }
}
