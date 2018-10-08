import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Mensajeriapost from './Mensajeriapost.js';
import Terminar from './Terminar.js';
import Creado from './Creado.js';
import Onboarding from './Onboarding.js';
import Principal from './Principal.js';
import Bienvenida from './Bienvenida.js';
import Ordenes from './Ordenes.js';
import Flechas from './Flechas.js';
import Desplegable from './Desplegable.js';
import Desplegable2 from './Desplegable2.js';
import Field from './Field.js';
import {Button,Link} from '@shopify/polaris';
import Fild1 from './Fild1.js';
import Options from './Options.js';
import Options2 from './Options2';
import Fieldd from './Fieldd.js';
import Fieldd2 from './Fieldd2.js';
import { Table } from 'antd';
import Options3 from './Options3';

const columns = [{
  title: 'Subir cambios a Mercado Libre',
  dataIndex: 'name',
}, {
  title: 'SKU',
  dataIndex: 'age',
}, {
  title: 'Titulo en MercadoLibre ',
  dataIndex: 'address',
},{
  title: 'Status',
  dataIndex: 'address1',
},{
  title: 'Estado',
  dataIndex: 'address11',
},{
  title: 'Categoria ML',
  dataIndex: 'address2',
},{
  title: 'Precio Woo Commerce',
  dataIndex: 'address3',
},{
  title: 'Precio Mercado Libre',
  dataIndex: 'address4',
},{
  title: 'Inventario Woo Commerce',
  dataIndex: 'address5',
},{
  title: 'Inventario MercadoLibre',
  dataIndex: 'address12',
},{
  title: 'Tipo de Envio',
  dataIndex: 'address6',
},{
  title: 'Costo de Envio en Mercado Libre',
  dataIndex: 'address7',
},{
  title: 'Comision de Mercado Libre',
  dataIndex: 'address8',
},{
  title: 'Ver Publicación',
  dataIndex: 'address9',
},{
  title: 'Ultima Actualización',
  dataIndex: 'address10',
}
];

const data = [{
  key: '1',
  name: <Button primary>Subir Cambios</Button>,
  age: 42,
  address: <Fild1></Fild1>,
  address1:<Options></Options>,
  address11: <Options2></Options2>,
  address2:<Link url="">Categorizar</Link>,
  address3:12,
  address4:<Fieldd></Fieldd>,
  address5:'',
  address12:<Fieldd2></Fieldd2>,
  address6:<Options3></Options3>,
  address7:'N/A',
  address8:'0.0',
  address9:'No hay',
  address10:'',


}, {
  key: '2',
  name: <Button primary>Subir Cambios</Button>,
  age: 42,
  address: <Fild1></Fild1>,
  address1:<Options></Options>,
  address11: <Options2></Options2>,
  address2:<Link url="">Categorizar</Link>,
  address3: 120,
  address4:<Fieldd></Fieldd>,
  address5:'',
  address12:<Fieldd2></Fieldd2>,
  address6:<Options3></Options3>,
  address7:'N/A',
  address8:'0.0',
  address9:'No hay',
  address10:'',
}, {
  key: '3',
  name: <Button primary>Subir Cambios</Button>,
  age: 32,
  address: <Fild1></Fild1>,
  address1:<Options></Options>,
  address11: <Options2></Options2>,
  address2:<Link url="">Categorizar</Link>,
  address3: 123,
  address4:<Fieldd></Fieldd>,
  address5:'',
  address12:<Fieldd2></Fieldd2>,
  address6:<Options3></Options3>,
  address7:'N/A',
  address8:'0.0',
  address9:'No hay',
  address10:'',
}, {
  key: '4',
  name: <Button primary>Subir Cambios</Button>,
  age: 99,
  address: <Fild1></Fild1>,
  address1: <Options></Options>,
  address11: <Options2></Options2>,
  address2: <Link url="">Categorizar</Link>,
  address3: 1234,
  address4:<Fieldd></Fieldd>,
  address5:'',
  address12:<Fieldd2></Fieldd2>,
  address6:<Options3></Options3>,
  address7:'N/A',
  address8:'0.0',
  address9:'No hay',
  address10:'',
}];

class App extends React.Component {
  state = {
    selectedRowKeys: [],
  };
  selectRow = (record) => {
    const selectedRowKeys = [...this.state.selectedRowKeys];
    if (selectedRowKeys.indexOf(record.key) >= 0) {
      selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
    } else {
      selectedRowKeys.push(record.key);
    }
    this.setState({ selectedRowKeys });
  }
  onSelectedRowKeysChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectedRowKeysChange,
    };
    return (
      <div style={{width:'90em',height:'50em',padding:'5em'}}>
     <Mensajeriapost></Mensajeriapost>
     <Terminar></Terminar>
     <Creado></Creado>
       <Onboarding></Onboarding>
     <Principal></Principal>

     <Bienvenida></Bienvenida>
<Ordenes></Ordenes>

     <div style={{padding:'5px'}}>
     <Flechas></Flechas>
   <Desplegable></Desplegable>
 <Desplegable2></Desplegable2>
<div style={{width:'363px',marginLeft:'750px',height:'35px'}}>
 <Field></Field>
 </div>


 </div>
  <div style={{width:'210em', height:'420px',padding:'0em',overflow:'auto',background:'white'}}>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        onRow={(record) => ({
          onClick: () => {
            this.selectRow(record);
          },
        })}
      />
      </div>
    </div>
    );
  }
}
export default App;
