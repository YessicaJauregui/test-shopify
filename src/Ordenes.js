import React from 'react';
import {Card, Label, Select, Tabs,List,Button,Thumbnail} from '@shopify/polaris';
import Ordenes2 from './Ordenes2.js';
import Field1 from './Field1.js';
import Ordenes3 from './Ordenes3.js';

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
        panelID: 'all-customers-content',
      },
      {
        id: 'accepts-marketing',
        content: 'Cerradas',
        panelID: 'accepts-marketing-content',
      },

    ];
    const tabPanels = [
  (

    <Tabs.Panel id="all-customers-content">
         <Card sectioned>
         <Card title="Ordenes"sectioned>
    <div style={{width:'800px'}}>
    <Ordenes2></Ordenes2>
            <div style={{width:'60%',marginTop:'-30px',marginLeft:'5%'}}>

            <Field1></Field1>

            </div>
            <div style={{padding:'10px',marginTop:'-45px',marginLeft:'65%'}}>

      <Button primary >Buscar</Button>

            </div>

    <Button primary>Filtros</Button>
        </div>
        </Card>
        </Card>
   </Tabs.Panel>
    ),
    (
      <Tabs.Panel id="accepts-marketing-content">
      <Card sectioned>
      <Card title="Ordenes"sectioned>
      <div style={{width:'800px'}}>
      <Ordenes3></Ordenes3>
         <div style={{width:'60%',marginTop:'-30px',marginLeft:'5%'}}>

         <Field1></Field1>

         </div>
         <div style={{padding:'10px',marginTop:'-45px',marginLeft:'65%'}}>

      <Button primary >Buscar</Button>

         </div>

      <Button primary>Filtros</Button>
      </div>
      </Card>
      </Card>
        </Tabs.Panel>
    ),
  ];

    return (
      <Card>
      <div style={{padding:'20px'}}>
      <Tabs
        selected={selected}
        tabs={tabs}
        onSelect={this.handleTabChange}
      />
      {tabPanels[selected]}
      </div>
      </Card>
    );
  }
}
