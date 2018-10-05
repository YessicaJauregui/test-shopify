import React from 'react';
import {Card, Label, Select, Tabs,List,Button,Thumbnail} from '@shopify/polaris';

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
        content: 'Inicio',
        accessibilityLabel: 'All customers',
        panelID: 'all-customers-content',
      },
      {
        id: 'accepts-marketing',
        content: 'Activacion',
        panelID: 'accepts-marketing-content',
      },
      {
        id: 'repeat-customers',
        content: 'OnBoarding',
        panelID: 'repeat-customers-content',
      },
      {
        id: 'prospects',
        content: 'Preguntas Frecuentes',
        panelID: 'prospects-content',
      },
      {
        id: 'prospects1',
        content: 'Soporte',
        panelID: 'prospects-content1',
      },
    ];

    return (
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={this.handleTabChange} />
        <Card.Section title={tabs[selected].content}>
        <div style={{width:'37em'}}>
       <Card sectioned>
        <Thumbnail
          source="https://www.marketful.mx/assets/Logo_marketful-b973bdcabe50755f3a07dc2b2fae41c501eecb4e06756215b6735f4fd5616c81.png"
          source="https://pbs.twimg.com/profile_images/1000023174401044480/0Vfde35n_400x400.jpg"
          size="large"
          alt="Black choker necklace"
        />

        <div style={{float:'left',padding:'10px'}}>

        <Button primary>Activa tu tienda</Button>
        </div>
</Card>
</div>
<div style={{width:'40em',float:'right',marginTop:'-154px'}}>
        <Card title="Version 1.0"sectioned>
        <List type="bullet">
        <div>
          <p>Publicaciones :</p>

           <p>Con nuestro Seller Center maneja todos tus productos de shopify y publicalos en Mercado Libre con solo un clic de Marketful .</p>
        </div>
        <div style={{marginTop:'6.3%'}}>
          <p>Practicidad : </p>
          <p>Con Marketful la practicidad es la norma, con nuestro Seller Center en una misma pantalla podrás manejar todos tus productos y publicaciones facilitando tu trabajo y suprimiendo las tareas mas repetitivas.</p>
        </div>
        <div style={{marginTop:'6.3%'}}>
          <p>Cambios masivos :</p>
          <p>Con Marketful realizar cambios multiples nunca habia sido tan sencillo, con nuestras herramientas de cambios masivos actualiza el estado de tus publicaciones con tan solo un par de clics.</p>
        </div>
        <div style={{marginTop:'6.3%'}}>
          <p>La API de Mercado Libre en tus manos: </p>
          <p>Gracias a la tecnologia de Mercado Libre
           y de Marketful dejamos en tus manos un complemento de shopify totalmente
           adaptado para trabajar junto a tu tienda de Mercado Libre.
           </p>
        </div>
        <div style={{marginTop:'6.3%'}}>
           <p>Todo el soporte de Marketful : </p>
           <p>Esta en tus manos, todo un equipo de profesionales listos
            para trabajar junto a ti creando el Seller Center mas exitoso de México.</p>
        </div>
        </List>
 </Card>
 </div>
 <div style={{width:'40em'}}>
 <Card title="Somos Marketful" sectioned>
  <p>Tenemos un Onboarding que concentra las herramientas clave que te
ayudará a comprender de manera sencilla el funcionamiento de nuestro
Seller Center da una miradita de manera gratuita.</p>
<div style={{padding:'10px'}}>
<Button primary>Ir a Onboarding</Button>
</div>
</Card>
</div>

<Card title="Apoyo paso a paso" sectioned>
<p>Te apoyamos paso a paso para que tu tienda quede espectacular teniendo tus publicaciones de Mercado Libre y shopify para lo cual te apoyamos con una guia completa para que sea sencillo y eficiente para ti controlar tus ventas a travez de nuestra plataforma. ¿Tienes alguna duda? </p>
<div style={{padding:'10px'}}>
<Button primary>Soporte</Button>
</div>
</Card>
        </Card.Section>
      </Card>
    );
  }
}
