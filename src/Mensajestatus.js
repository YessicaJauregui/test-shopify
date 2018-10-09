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
            Ahora asignaremos un valor al status, en caso de que se finalize se debera confirmar
            ya que para activarlo de nuevo se debera hacer una nueva publicación de Mercado Libre.
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
