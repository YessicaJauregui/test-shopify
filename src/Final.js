import React from 'react';
import {EmptyState,Button} from '@shopify/polaris';


export default class App extends React.Component {
  render() {
    return (
        <div style={{background:'#F6F7F7'}}>
      <EmptyState

  heading="¡FELICIDADES! Has concluido con el Onboarding"
  action={{content: 'Terminar'}}


  image="https://cdn.dribbble.com/users/40756/screenshots/3556184/dribbble-files.png"
>
  <p>Ahora estas listo para comenzar a utilizar Marketful Seller Center, si tienes alguna duda contacta a soporte.

</p>

</EmptyState>
  </div>
    );
  }
}
