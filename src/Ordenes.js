import React from 'react';
import {Card, Label, Select, Tabs,List,Button,Thumbnail} from '@shopify/polaris';
import Ordenes2 from './Ordenes2.js';
import Field1 from './Field1.js';

export default class TabsExample extends React.Component {
  state = {
    selected: 0,
  };

  handleTabChange = (selectedTabIndex) => {
    this.setState({selected: selectedTabIndex});
  };

  render() {
    const {selected} = this.state;
    const tabs = [
      {
        id: 'all-customers',
        content: 'Abiertas',
        accessibilityLabel: 'All customers',
        panelID: 'all-customers-content',
      },
      {
        id: 'accepts-marketing',
        content: 'Cerradas',
        panelID: 'accepts-marketing-content',
      },

    ];

    return (
      <div style={{width:'800px',padding:'5em'}}>
      <Card>

        <Tabs tabs={tabs} selected={selected} onSelect={this.handleTabChange} />

        <Card.Section title={tabs[selected].content}>
        <Ordenes2></Ordenes2>
        <div style={{width:'60%',marginTop:'-30px',marginLeft:'5%'}}>

        <Field1></Field1>

        </div>
        <div style={{padding:'10px',marginTop:'-45px',marginLeft:'65%'}}>

  <Button primary >Buscar</Button>

        </div>

<Button primary>Filtros</Button>

        </Card.Section>

      </Card>
      </div>
    );
  }
}
