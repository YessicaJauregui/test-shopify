import React from 'react';
import {Card, Tabs,List,Button,Thumbnail,Link} from '@shopify/polaris';
import Fieldbienvenida from './Fieldbienvenida.js';

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
        content: 'Activación',
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
    const tabPanels = [
  (
    <Tabs.Panel id="all-customers-content">
    <div style={{width:'45em'}}>
   <Card sectioned>
   <div style={{marginLeft:'180px'}}>
    <Thumbnail
      source="https://pbs.twimg.com/profile_images/1000023174401044480/0Vfde35n_400x400.jpg"
      size="large"
      alt="Black choker necklace"
    />
    </div>

    <div style={{float:'left',padding:'10px',marginLeft:'150px'}}>

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
  <div style={{padding:'10px',marginLeft:'300px'}}>
  <Button primary>Ir a Onboarding</Button>
  </div>
  </Card>
  </div>

  <Card title="Apoyo paso a paso" sectioned>
  <p>Te apoyamos paso a paso para que tu tienda quede espectacular teniendo tus publicaciones de Mercado Libre y shopify para lo cual te apoyamos con una guia completa para que sea sencillo y eficiente para ti controlar tus ventas a travez de nuestra plataforma. ¿Tienes alguna duda? </p>
  <div style={{padding:'10px',marginLeft:'340px'}}>
  <Button primary>Soporte</Button>
  </div>
  </Card>
    </Tabs.Panel>
  ),
  (
    <Tabs.Panel id="accepts-marketing-content">
    <div style={{width:'78em'}}>


  <Card title="Bienvenido a la activación" sectioned>
  <p>El proceso de activacion consiste en los siguientes 2 pasos: </p>
  <List type="bullet">
<List.Item>Da clic <Button primary>Aqui</Button>para logearte en Marketful</List.Item>

<List.Item>Ya te has registrado, ahora ingresa el link de tu tienda<Fieldbienvenida></Fieldbienvenida>marketful.mx <Button primary>Obtener Link</Button></List.Item>
</List>
  </Card>
  </div>
</Tabs.Panel>
  ),
  (
    <Tabs.Panel id="repeat-customers-content">
      <Card title="Bienvenido a la nueva experiencia en Shopify" sectioned>
      Te damos la bievenida al onboarding, en los siguientes minutos aprenderas a administrar tus productos de WooCommerce y poder modificar los atributos de la publicacion de ese producto dentro de Mercado Libre.
      </Card>
      <Card title="Vamos a comenzar observando tus productos," sectioned>Como leiste anteriormente Marketful Seller Center esta enfocado en facilitar los procedimientos que conlleva el manejar una tienda en WooCommerce y Mercado Libre. Desde dar de alta una publicación junto con todos sus diferentes atributos hasta el pausarlas todas de una vez sin tener que hacerlo para cada producto. En esta introducción te mostraremos lo mas basico para poder empezar a utilizarlo. Primero comenzaremos observado nuestros productos en la vista del Seller Center. En caso de que no tengas productos la lista no mostrará ningun elemento, en caso contrario se veran todos tus productos con su información propia:
      <List type="bullet">
    <List.Item>SKU</List.Item>
    <List.Item>Titulo en Mercado Libre</List.Item>
    <List.Item>Status</List.Item>
    <List.Item>Categoría en Mercado Libre</List.Item>
    <List.Item>Precio en WooCommerce</List.Item>
    <List.Item>Precio en Mercado Libre</List.Item>
    <List.Item>Inventario en WooCommerce</List.Item>
    <List.Item>Inventario en Mercado Libre</List.Item>
    <List.Item>Ver publicacion</List.Item>
    <List.Item>Ultima Actualización</List.Item>
    </List>
    <div style={{padding:'15px'}}>
    <p>Dar tus productos de alta es muy sencillo, solo da clic en "Productos" y ahi podras dar un nuevo producto de alta.</p>
    </div>
    <div style={{padding:'10px',marginLeft:'747px'}}>
  <Button primary>Pruebalo</Button>
</div>
  <Card title="Ahora veremos las opciones" sectioned>Que estan disponibles en la barra de titulo del Seller Center:
  <List.Item>Botones atras y adelante: Estan en la parte superior izquierda y te permiten navegar entre todos tus productos. Cada pantalla te muestra 50 productos, para ver los siguientes puedes presionar siguiente o para regresar puedes dar clic hacia atras.</List.Item>
  <List.Item>Status Masivo: Este boton en conjunto con el checkbox masivo, te permite cambiar el status de uno o muchos productos de una sola vez.</List.Item>
  <List.Item>Exposición Masiva: Este boton como el anterior, permite que se cambie masivamente la exposición de uno o muchos productos de una sola vez.</List.Item>
  <List.Item>Agregar descripción general: Este boton te redirige hacia la pantalla en la cual podras asignar una descripción comun debajo de su descripción actual a todos los productos.</List.Item>
  <List.Item>Buscar: La caja de texto en la parte superior derecha de la pantalla te permite ingresar algun nombre de algun producto, dar clic en el boton de la lupa que se encuentra a un lado y te cargará los productos que coincidan con ese nombre en caso de tener alguno.</List.Item>
<div style={{padding:'10px',marginLeft:'730px'}}>
  <Button primary>Pruebalo</Button>
  </div>
  <div style={{padding:'10px'}}>
  <p>Modificando la información de los productos :</p>
  </div>
    <div style={{padding:'10px'}}>
  <p>Con Marketful cambiar los datos de tus productos de WooCommerce es muy sencillo. Esta es la distribución de los datos que tiene cada producto:</p>
</div>
<div style={{padding:'10px',marginLeft:'730px'}}>

    <Button primary>Pruebalo</Button>
    </div>
    <div style={{padding:'10px'}}>
Puedes modificar el Status, la Exposición, la Categoria, el precio en Mercado Libre, en inventario en Mercado Libre y el tipo de envio. Recuerda que todos los cambios que realizes se guardarán dentro de shopify y se actualizarán en Mercado Libre por lo cual no es necesario realizar dichos cambios en esas aplicaciones tambien.
</div>
  <div style={{padding:'10px'}}>
Al ingresar un nuevo producto es importante recordar que el titulo del mismo debera de ser igual o menor a 60 caracteres, ya que Mercado Libre requiere un titulo de esas dimensiones.
</div>
  <div style={{padding:'10px'}}>
Por otro lado es importante tomar en cuenta que al momento de publicar algun producto en Mercado Libre se tomaran las fotografias que se ingresen en shopify ademas de la descripción que se ingreso ahi mismo.
</div>
  <div style={{padding:'10px'}}>
Es preciso recordar que solo los productos con un precio menor o igual a $470 pesos tendran disponible la opción de envio gratis.
</div>
<Link url="https://www.marketful.mx/"> Hacer onboarding</Link>
  </Card>
  <div style={{padding:'10px'}}>
  <Link url="https://www.marketful.mx/">Ir arriba </Link>
  </div>
  </Card>

    </Tabs.Panel>
  ),
  (
    <Tabs.Panel id="prospects-content">
    <Card title="Preguntas Frecuentes" sectioned>
    Hemos recopilado un conjunto de preguntas dentro de las que mas nos han hecho en Marketful, te dejamos el indice y todas con una respuesta completa para ti. En caso de no encontrar la respuesta que estas buscando consulta nuestra seccion de <Link url="https://www.marketful.mx/">Soporte</Link>
    </Card>
    <Card title="Tabla de contenido" sectioned>
    <List type="bullet">
    <List.Item><Link url="https://www.marketful.mx/">¿Qué es Marketful?</Link></List.Item>
    <List.Item><Link url="https://www.marketful.mx/">¿Qué es Fulfillment?</Link></List.Item>
    <List.Item><Link url="https://www.marketful.mx/">¿Cómo funciona el Fulfillment?</Link></List.Item>
    <List.Item><Link url="https://www.marketful.mx/">¿Cuánto tiempo se tardan en recibir y enviar mis pedidos?</Link></List.Item>
    <List.Item><Link url="https://www.marketful.mx/">¿Qué pasa si se extravia un envio?</Link></List.Item>
    <List.Item><Link url="https://www.marketful.mx/">¿Qué pasa si el pedido llega equivocado?</Link></List.Item>
    <List.Item><Link url="https://www.marketful.mx/">¿Cuál es el esquema de cobro?</Link></List.Item>
    <List.Item><Link url="https://www.marketful.mx/">¿Cómo me suscribo?</Link></List.Item>
        </List>
    </Card>
    <Card title="¿Qué es Marketful?" sectioned>
      <p>Marketful es el conjunto de herramientas (Shipping, Fulfillment y Seller-Center) que conforman el ecosistema en linea enfocado a manejar puntos criticos para los vendedores, simplificandolos y convirtiendolos en puntos fuertes de su ecosistema de ventas gracias a nuestras multiples herramientas.</p>
    </Card>
      <Card title="¿Que es Fulfillment?" sectioned>
      <p>Fulfillment es un termino empleado en logistica, para definir el proceso que incluye todas las etapas de planificación, fabricación, almacenamiento y distribución desde que se recibe un pedido del cliente, hasta que se le entrega el producto final. </p>
    </Card>
  <Card title="¿Cuánto tiempo se tardan en recibir y enviar mis productos?" sectioned>
  <p> Al estar dentro del Seller Center y confirmar una venta se despliegan diferentes alternativas de envio, dependiendo del tipo de envio que se haya seleccionado es el tiempo que tardará en iniciar el envio. Ademas es importante tomar en cuenta que el corte de envios es a las 13:00 hrs hora del centro de México, por lo cual un envio posterior a esa hora se reflejara hasta el dia siguiente. En Marketful tus envios estan asegurados, por lo cual cuentas con el soporte de Marketful sin importar lo que pase.</p>
  </Card>
    <Card title="¿Qué pasa si se extravia un envio?" sectioned>
    <p> En tal caso, cuentas con nuestro respaldo en todo momento. Dependiendo la situación podremos rembolsar hasta dar seguimiento con la empresa de envios.</p>
    </Card>
      <Card title="¿Qué pasa si el pedido llega equivocado?" sectioned>
      <p>En tal caso sin costo extra tendras apoyo completo para la sustitución del producto.</p>
      </Card>
      <Card title="¿Cuál es el esquema de cobro?" sectioned>
      <p>El pago es mensual en el caso del Seller Center y por producto en stock en caso de Fulfillment.El pago es mensual en el caso del Seller Center y por producto en stock en caso de Fulfillment.</p>
      </Card>
      <Card title="¿Como me suscribo?" sectioned>
      <p>La suscripción es muy sencilla, por el momento el procedimiento consiste en registrarte vía telefonica a los telefonos de Marketful +52 449 392 5230</p>
</Card>
<div style={{padding:'10px'}}>
  <Link url="https://www.marketful.mx/">Ir arriba </Link>
</div>
    </Tabs.Panel>
  ),
  (
    <Tabs.Panel id="prospects-content1">
    <Card title="Creando un Ticket en Github" sectioned>
    <p>Ayudanos reportando un error en nuestro repositorio en GitHub. Sigue los pasos y forma parte de esta gran comunidad. <Link url="https://www.marketful.mx/">Clic Aqui </Link></p>
    </Card>

    <Card title="Contacto directo" sectioned>
    <p>Estamos a tus ordenes a traves de adolfo@marketful.mx o marcanos al +52 449 392 5230</p>
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
