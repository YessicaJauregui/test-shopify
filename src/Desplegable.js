import React from 'react';
import {ActionList, Button,  Popover} from '@shopify/polaris';

export default class ActionListExample extends React.Component {
  state = {
    active: false,
  };

  togglePopover = () => {
    this.setState(({active}) => {
      return {active: !active};
    });
  };

  render() {
    const activator = (
      <Button onClick={this.togglePopover}>Status</Button>
    );

    return (
      <div style={{height: '30px',float:'left'}}>
        <Popover
          active={this.state.active}
          activator={activator}
          onClose={this.togglePopover}
        >
          <ActionList
            items={[

              {
                content: 'Activa',
                onAction: () => {
                  console.log('Activa');
                },
              },
              {
                content: 'Pausada',
                onAction: () => {
                  console.log('Pausada');
                },
              },
              {
                content: 'Finalizada',
                onAction: () => {
                  console.log('Finalizada');
                },
              },
            ]}
          />

        </Popover>
      </div>
    );
  }
}
