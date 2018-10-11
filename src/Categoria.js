import React from 'react';
import {Card,Thumbnail,Button,DisplayText} from '@shopify/polaris';
import CategoriaTipos from './CategoriaTipos.js';
import CategoriaServicios from './CategoriaServicios.js';
import CategoriaTransporte from './CategoriaTransporte.js';

export default class App extends React.Component {
  render() {
    return (

<div style={{width:'1300px'}}>
      <Card title="Producto: Producto de prueba" sectioned>
      <div style={{width:'250px',height:'210px'}}>
      <Card title="Producto de prueba" sectioned>
      <Thumbnail
        source="https://png.pngtree.com/element_origin_min_pic/00/01/42/82567d5ede018c7.jpg"
        size="long"
        alt="Black choker necklace"
      />
      </Card>
      </div>
      <div style={{width:'250px',marginLeft:'252px',marginTop:'-210px'}}>
      <Card title="Tipos" sectioned>
      <div style={{width:'230px',height:'210px',overflow:'auto'}}>
      <CategoriaTipos></CategoriaTipos>
      </div>
      </Card>
      </div>

      <div style={{width:'250px',marginLeft:'505px',marginTop:'-294px'}}>
      <Card title="Relacionados" sectioned>
      <div style={{width:'230px',height:'210px',overflow:'auto'}}>
      <CategoriaServicios></CategoriaServicios>
      </div>
      </Card>
      </div>

      <div style={{width:'250px',marginLeft:'758px',marginTop:'-294px'}}>
      <Card title="Ofrece" sectioned>
      <div style={{width:'230px',height:'210px',overflow:'auto'}}>
      <CategoriaTransporte></CategoriaTransporte>
      </div>
      </Card>
      </div>

      <div style={{width:'250px',marginLeft:'1011px',marginTop:'-294px'}}>
      <Card title="Finalizado" sectioned>
      <div style={{width:'100px',height:'210px',marginLeft:'61px'}}>
      <Thumbnail
        source="http://icons.iconarchive.com/icons/mazenl77/I-like-buttons-3a/256/Cute-Ball-Go-icon.png"
        size="long"
        alt="Black choker necklace"
      />
      <div style={{marginLeft:'22px'}}>
      <DisplayText size="small">¡Listo!</DisplayText>
      </div>
      <div style={{marginLeft:'10px',marginTop:'10px'}}>
      <Button primary size="small">Continuar</Button>
      </div>
      </div>
      </Card>
      </div>
<div style={{marginTop:'20px'}}>
  <Button primary size="small">Regresar</Button>
</div>
</Card>
</div>


    );

  }
}
