import React from 'react';
import {ActionList, Button, Popover} from '@shopify/polaris';

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
      <Button onClick={this.togglePopover}>Exposicion</Button>
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
                content: 'Gratis',
                onAction: () => {
                  console.log('Gratis');
                },
              },
              {
                content: 'Clasica',
                onAction: () => {
                  console.log('Clasica');
                },
              },
              {
                content: 'Premium',
                onAction: () => {
                  console.log('Premium');
                },
              },
            ]}
          />

        </Popover>
      </div>
    );
  }
}
