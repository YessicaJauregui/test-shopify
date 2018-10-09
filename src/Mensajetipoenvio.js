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
              El tipo de envio es la forma en la que se enviará tu producto y lo que se le cobrará a tu cliente,
              por lo cual es importante asignarle un valor, vayamos a hacerlo.
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
