import React from 'react';
import {Pagination} from '@shopify/polaris';

export default class App extends React.Component {
  render() {
    return (
      <div style={{float:'left'}}>
      <Pagination
  hasPrevious
  onPrevious={() => {
    console.log('Previous');
  }}
  hasNext
  onNext={() => {
    console.log('Next');
  }}
/>
</div>
    );
  }
}
