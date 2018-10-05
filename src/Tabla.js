import React from 'react';
import {Card, DataTable, Page} from '@shopify/polaris';

export default class DataTableExample extends React.Component {
  render() {
    const rows = [
      ['Emerald Silk Gown', '$875.00', '124689', '140', '$122,500.00','213','aaaa','jsj','asadad','sdsd','sdfdf','sdfdff','sdfdff','sfdff','sdfdf'],
      ['Emerald Silk Gown', '$875.00', '124689', '140', '$122,500.00','213','aaaa','jsj','asadad','sdsd','sdfdf','sdfdff','sdfdff','sfdff','sdfdf'],
      [
'Emerald Silk Gown', '$875.00', '124689', '140', '$122,500.00','213','aaaa','jsj','asadad','sdsd','sdfdf','sdfdff','sdfdff','sfdff','sdfdf'
      ],
    ];

    return (
      <Page title="Sales by product">
        <Card>
          <DataTable
            columnContentTypes={[
              'text',
              'text',
              'text',
              'text',
              'text',
              'text',
              'text',
              'text',
              'text',
              'text',
              'text',
              'text',
              'text',
              'text',
              'text',
            ]}
            headings={[
              'Subir cambios a Mercado Libre',
              'SKU',
              'Titulo en Mercado Libre',
              'Status',
              'Exposicion',
              'Categoria UML',
              'Precio WooCommerce',
              'Precio Mercado Libre',
              'Inventario WooCommerce',
              'Inventario Mercado Libre',
              'Tipo de envio',
              'Costo de envio en Mercado Libre',
              'Comision de Mercado Libre',
              'Ver publicación',
              'Ultima Actualizacion',

            ]}
            rows={rows}

          />
        </Card>
      </Page>
    );
  }
}
