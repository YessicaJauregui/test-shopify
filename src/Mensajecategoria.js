import React from 'react';
import {Button, Modal, TextContainer} from '@shopify/polaris';
import App from './App.js';
export default class ModalExample extends React.Component {
  state = {
    active: true,
  };

  render() {
    const {active} = this.state;

    return (
      <div style={{height: '500px'}}>

        <Modal
          open={active}
          onClose={this.handleChange}
          primaryAction={{
            content: 'Aceptar',
            onAction: this.handleChange,
          }}
          secondaryActions={[
            {
              content: 'Mas información',
              onAction: this.handleChange,
            },
          ]}
        >
          <Modal.Section>
            <TextContainer>
              <p>
              La categoria es un atributo que Mercado Libre utiliza para categorizar los productos
              y hacerlos más visibles al comprador, asignale una categoria a nuestro producto de prueba para continuar.
              </p>
            </TextContainer>
          </Modal.Section>
        </Modal>
      </div>
    );
  }

  handleChange = () => {
    this.setState(({active}) => ({active: !active}));
  };
}
